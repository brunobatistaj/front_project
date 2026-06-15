import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import WebSocket from "ws";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

interface Asset {
    symbol: string;
    price: number;
}

const assets = new Map<string, Asset>();

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.emit(
        "market:update",
        Array.from(assets.values())
    );
});

const streams = [
    "btcusdt@trade",
    "ethusdt@trade",
    "solusdt@trade",
];

const ws = new WebSocket(
    `wss://stream.binance.com:9443/stream?streams=${streams.join("/")}`
);

ws.on("open", () => {
    console.log("Connected to Binance");
});

ws.on("message", (data) => {
    const parsed = JSON.parse(data.toString());

    const trade = parsed.data;

    const symbol = trade.s;
    const price = Number(trade.p);

    assets.set(symbol, {
        symbol,
        price,
    });

    io.emit(
        "market:update",
        Array.from(assets.values())
    );
});

ws.on("error", (error) => {
    console.error("Binance error:", error);
});

ws.on("close", () => {
    console.log("Binance connection closed");
});

server.listen(3333, () => {
    console.log("WebSocket server running on port 3333");
});
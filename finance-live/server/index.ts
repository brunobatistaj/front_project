import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

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
    changePercent: number;
}

const assets: Asset[] = [
    {
        symbol: "BTC",
        price: 540000,
        changePercent: 0,
    },
    {
        symbol: "ETH",
        price: 18000,
        changePercent: 0,
    },
    {
        symbol: "AAPL",
        price: 1200,
        changePercent: 0,
    },
];

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.emit("market:update", assets);
});

function updatePrices() {
    assets.forEach((asset) => {
        const variation = Math.random() * 100 - 50;

        asset.price += variation;

        asset.changePercent = Number(
            ((variation / asset.price) * 100).toFixed(2)
        );
    });

    io.emit("market:update", assets);
}

setInterval(updatePrices, 2000);

server.listen(3333, () => {
    console.log("WebSocket server running on port 3333");
});
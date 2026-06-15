import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useMarketStore } from "@/store/marketStore";

interface AssetChartProps {
    symbol: string;
}

interface ChartPoint {
    time: string;
    price: number;
}

export default function AssetChart({
    symbol,
}: AssetChartProps) {
    const asset = useMarketStore((state) =>
        state.assets.find(
            (item) => item.symbol === symbol
        )
    );

    const [history, setHistory] = useState<ChartPoint[]>([]);

    useEffect(() => {
        if (!asset) return;

        setHistory((prev) => {
            const updated = [
                ...prev,
                {
                    time: new Date().toLocaleTimeString(),
                    price: asset.price,
                },
            ];

            return updated.slice(-20);
        });
    }, [asset?.price]);

    return (
        <div className="h-80 w-full">
            <ResponsiveContainer>
                <LineChart data={history}>
                    <CartesianGrid stroke="#2B3139" strokeDasharray="3 3" />

                    <XAxis stroke="#B7BDC6" dataKey="time" />

                    <YAxis stroke="#B7BDC6"/>

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#F0B90B"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
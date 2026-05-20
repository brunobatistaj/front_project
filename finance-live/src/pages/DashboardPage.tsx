import { useMarketStore } from "@/store/marketStore";

export default function DashboardPage() {
    const assets = useMarketStore((state) => state.assets);

    return (
        <div className="p-8">
            <h1 className="mb-8 text-4xl font-bold">
                FinanceLive
            </h1>

            <div className="grid gap-4 md:grid-cols-3">
                {assets.map((asset) => (
                    <div
                        key={asset.symbol}
                        className="rounded-xl bg-zinc-900 p-6"
                    >
                        <h2 className="text-2xl font-bold">
                            {asset.symbol}
                        </h2>

                        <p className="mt-2 text-xl">
                            R$ {asset.price.toFixed(2)}
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                            {asset.changePercent}%
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
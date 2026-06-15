import { Link } from "react-router-dom";
import { useMarketStore } from "@/store/marketStore";
import AssetChart from "@/components/market/AssetChart";
import { useSettingsStore } from "@/store/settingsStore";
import { themeClasses } from "@/styles/theme";

export default function DashboardPage() {
    const assets = useMarketStore((state) => state.assets);

    const theme = useSettingsStore(
        (state) => state.theme
    );

    const colors = themeClasses[theme];

    return (
        <div className={`min-h-screen ${colors.page}`}>
            <header
                className={`
                    border-b
                    ${colors.header}
                `}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
                    <h1 className="text-3xl font-bold text-[#F0B90B]">
                        FinanceLive
                    </h1>

                    <div className="flex gap-4">
                        <Link
                            to="/markets"
                            className="
                                rounded-lg
                                bg-[#F0B90B]
                                px-4
                                py-2
                                font-semibold
                                text-black
                                transition
                                hover:bg-[#FCD535]
                            "
                        >
                            Mercados
                        </Link>

                        <Link
                            to="/settings"
                            className="
                                rounded-lg
                                border
                                border-[#F0B90B]
                                px-4
                                py-2
                                transition
                                hover:bg-[#F0B90B]
                                hover:text-black
                            "
                        >
                            Configurações
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl p-8">
                <h2 className="mb-8 text-2xl font-semibold">
                    Mercado em Tempo Real
                </h2>

                <div className="grid gap-6">
                    {assets.map((asset) => (
                        <div
                            key={asset.symbol}
                            className={`
                                rounded-2xl
                                border
                                p-6
                                shadow-lg
                                ${colors.card}
                            `}
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {asset.symbol}
                                    </h3>

                                    <p className="mt-2 text-3xl font-bold text-[#F0B90B]">
                                        ${asset.price.toFixed(2)}
                                    </p>
                                </div>

                                <span
                                    className="
                                        rounded-full
                                        bg-[#F0B90B]/20
                                        px-3
                                        py-1
                                        text-sm
                                        font-medium
                                        text-[#F0B90B]
                                    "
                                >
                                    Tempo Real
                                </span>
                            </div>

                            <AssetChart symbol={asset.symbol} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
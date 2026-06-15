import { useParams, Link } from "react-router-dom";

import { useMarketStore } from "@/store/marketStore";
import { useSettingsStore } from "@/store/settingsStore";
import { themeClasses } from "@/styles/theme";

export default function AssetDetailsPage() {
    const { symbol } = useParams();

    const asset = useMarketStore((state) =>
        state.assets.find(
            (item) => item.symbol === symbol
        )
    );

    const theme = useSettingsStore(
        (state) => state.theme
    );

    const colors = themeClasses[theme];

    if (!asset) {
        return (
            <div className={`min-h-screen ${colors.page}`}>
                <div className="mx-auto max-w-7xl p-8">
                    <h1 className="text-3xl font-bold text-[#F0B90B]">
                        Ativo não encontrado
                    </h1>
                </div>
            </div>
        );
    }

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
                        Voltar aos Mercados
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-5xl p-8">
                <div
                    className={`
                        rounded-2xl
                        border
                        p-8
                        shadow-lg
                        ${colors.card}
                    `}
                >
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold">
                                {asset.symbol}
                            </h1>

                            <p
                                className={`
                                    mt-2
                                    ${colors.secondaryText}
                                `}
                            >
                                Cotação em tempo real via Binance WebSocket
                            </p>
                        </div>

                        <span
                            className="
                                rounded-full
                                bg-[#F0B90B]/20
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-[#F0B90B]
                            "
                        >
                            Ao Vivo
                        </span>
                    </div>

                    <div
                        className={`
                            rounded-xl
                            border
                            p-6
                            ${colors.card}
                        `}
                    >
                        <p
                            className={`
                                text-lg
                                ${colors.secondaryText}
                            `}
                        >
                            Preço Atual
                        </p>

                        <p className="mt-4 text-5xl font-bold text-[#F0B90B]">
                            ${asset.price.toFixed(2)}
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        <div
                            className={`
                                rounded-xl
                                border
                                p-4
                                ${colors.card}
                            `}
                        >
                            <p
                                className={`
                                    text-sm
                                    ${colors.secondaryText}
                                `}
                            >
                                Símbolo
                            </p>

                            <p className="mt-2 font-bold">
                                {asset.symbol}
                            </p>
                        </div>

                        <div
                            className={`
                                rounded-xl
                                border
                                p-4
                                ${colors.card}
                            `}
                        >
                            <p
                                className={`
                                    text-sm
                                    ${colors.secondaryText}
                                `}
                            >
                                Fonte
                            </p>

                            <p className="mt-2 font-bold">
                                Binance
                            </p>
                        </div>

                        <div
                            className={`
                                rounded-xl
                                border
                                p-4
                                ${colors.card}
                            `}
                        >
                            <p
                                className={`
                                    text-sm
                                    ${colors.secondaryText}
                                `}
                            >
                                Atualização
                            </p>

                            <p className="mt-2 font-bold text-green-500">
                                Tempo Real
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
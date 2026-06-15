import { useState } from "react";
import { Link } from "react-router-dom";

import { useMarketStore } from "@/store/marketStore";
import { useSettingsStore } from "@/store/settingsStore";
import { themeClasses } from "@/styles/theme";

export default function MarketsPage() {
    const assets = useMarketStore((state) => state.assets);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const itemsPerPage = useSettingsStore(
        (state) => state.itemsPerPage
    );

    const theme = useSettingsStore(
        (state) => state.theme
    );

    const colors = themeClasses[theme];

    const filteredAssets = assets.filter((asset) =>
        asset.symbol
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const totalPages = Math.max(
        1,
        Math.ceil(filteredAssets.length / itemsPerPage)
    );

    const paginatedAssets = filteredAssets.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

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
                        to="/dashboard"
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
                        Dashboard
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-5xl p-8">
                <h2 className="mb-6 text-3xl font-bold">
                    Mercados
                </h2>

                <input
                    type="text"
                    placeholder="Pesquisar ativo..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className={`
                        mb-8
                        w-full
                        rounded-xl
                        border
                        p-4
                        outline-none
                        transition
                        focus:border-[#F0B90B]
                        ${colors.input}
                    `}
                />

                <div className="space-y-4">
                    {paginatedAssets.map((asset) => (
                        <Link
                            key={asset.symbol}
                            to={`/asset/${asset.symbol}`}
                            className={`
                                block
                                rounded-xl
                                border
                                p-5
                                transition
                                hover:border-[#F0B90B]
                                hover:translate-x-1
                                ${colors.card}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-bold">
                                        {asset.symbol}
                                    </p>

                                    <p
                                        className={`
                                            mt-1
                                            text-sm
                                            ${colors.secondaryText}
                                        `}
                                    >
                                        Binance Spot Market
                                    </p>
                                </div>

                                <p className="text-2xl font-bold text-[#F0B90B]">
                                    ${asset.price.toFixed(2)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        disabled={page === 1}
                        onClick={() =>
                            setPage((prev) => prev - 1)
                        }
                        className="
                            rounded-lg
                            border
                            border-[#F0B90B]
                            px-4
                            py-2
                            transition
                            hover:bg-[#F0B90B]
                            hover:text-black
                            disabled:opacity-50
                        "
                    >
                        Anterior
                    </button>

                    <span
                        className={`
                            font-medium
                            ${colors.secondaryText}
                        `}
                    >
                        Página {page} de {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() =>
                            setPage((prev) => prev + 1)
                        }
                        className="
                            rounded-lg
                            border
                            border-[#F0B90B]
                            px-4
                            py-2
                            transition
                            hover:bg-[#F0B90B]
                            hover:text-black
                            disabled:opacity-50
                        "
                    >
                        Próxima
                    </button>
                </div>
            </main>
        </div>
    );
}
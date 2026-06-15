import { Link } from "react-router-dom";

import { useSettingsStore } from "@/store/settingsStore";
import { themeClasses } from "@/styles/theme";

export default function SettingsPage() {
    const {
        theme,
        itemsPerPage,
        setTheme,
        setItemsPerPage,
    } = useSettingsStore();

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

            <main className="mx-auto max-w-3xl p-8">
                <h2 className="mb-8 text-3xl font-bold">
                    Configurações
                </h2>

                <div
                    className={`
                        rounded-2xl
                        border
                        p-6
                        shadow-lg
                        ${colors.card}
                    `}
                >
                    <div className="mb-8">
                        <label
                            htmlFor="theme"
                            className="
                                mb-2
                                block
                                text-lg
                                font-semibold
                            "
                        >
                            Tema
                        </label>

                        <p
                            className={`
                                mb-3
                                text-sm
                                ${colors.secondaryText}
                            `}
                        >
                            Escolha a aparência da aplicação.
                        </p>

                        <select
                            id="theme"
                            value={theme}
                            onChange={(e) =>
                                setTheme(
                                    e.target.value as
                                    | "light"
                                    | "dark"
                                )
                            }
                            className={`
                                w-full
                                rounded-xl
                                border
                                p-3
                                outline-none
                                transition
                                focus:border-[#F0B90B]
                                ${colors.input}
                            `}
                        >
                            <option value="light">
                                Claro
                            </option>

                            <option value="dark">
                                Escuro
                            </option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="itemsPerPage"
                            className="
                                mb-2
                                block
                                text-lg
                                font-semibold
                            "
                        >
                            Itens por página
                        </label>

                        <p
                            className={`
                                mb-3
                                text-sm
                                ${colors.secondaryText}
                            `}
                        >
                            Quantidade exibida na página de mercados.
                        </p>

                        <select
                            id="itemsPerPage"
                            value={itemsPerPage}
                            onChange={(e) =>
                                setItemsPerPage(
                                    Number(e.target.value)
                                )
                            }
                            className={`
                                w-full
                                rounded-xl
                                border
                                p-3
                                outline-none
                                transition
                                focus:border-[#F0B90B]
                                ${colors.input}
                            `}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                </div>

                <div
                    className={`
                        mt-6
                        rounded-2xl
                        border
                        p-6
                        ${colors.card}
                    `}
                >
                    <h3 className="mb-3 text-xl font-bold text-[#F0B90B]">
                        Preferências Salvas
                    </h3>

                    <p className={colors.secondaryText}>
                        Todas as configurações são persistidas
                        automaticamente no localStorage e serão
                        restauradas ao reabrir a aplicação.
                    </p>
                </div>
            </main>
        </div>
    );
}
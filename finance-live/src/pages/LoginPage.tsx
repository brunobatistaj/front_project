import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useSettingsStore } from "@/store/settingsStore";
import { themeClasses } from "@/styles/theme";

export default function LoginPage() {
    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);

    const theme = useSettingsStore(
        (state) => state.theme
    );

    const colors = themeClasses[theme];

    function handleLogin() {
        login({
            name: "Bruno",
            email: "bruno@email.com",
        });

        navigate("/dashboard");
    }

    return (
        <div
            className={`
                flex
                min-h-screen
                items-center
                justify-center
                px-4
                ${colors.page}
            `}
        >
            <div
                className={`
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    p-8
                    shadow-xl
                    ${colors.card}
                `}
            >
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-[#F0B90B]">
                        FinanceLive
                    </h1>

                    <p
                        className={`
                            mt-3
                            ${colors.secondaryText}
                        `}
                    >
                        Dashboard financeiro em tempo real
                    </p>
                </div>

                <div className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                        >
                            E-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            value="bruno@email.com"
                            readOnly
                            className={`
                                w-full
                                rounded-xl
                                border
                                p-3
                                outline-none
                                ${colors.input}
                            `}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium"
                        >
                            Senha
                        </label>

                        <input
                            id="password"
                            type="password"
                            value="********"
                            readOnly
                            className={`
                                w-full
                                rounded-xl
                                border
                                p-3
                                outline-none
                                ${colors.input}
                            `}
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        className="
                            w-full
                            rounded-xl
                            bg-[#F0B90B]
                            py-3
                            font-bold
                            text-black
                            transition
                            hover:bg-[#FCD535]
                        "
                    >
                        Entrar
                    </button>
                </div>

                <div
                    className={`
                        mt-6
                        text-center
                        text-sm
                        ${colors.secondaryText}
                    `}
                >
                    Login demonstrativo para fins acadêmicos
                </div>
            </div>
        </div>
    );
}
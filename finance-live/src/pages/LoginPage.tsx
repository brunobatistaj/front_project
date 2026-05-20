import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);

    function handleLogin() {
        login({
            name: "Bruno",
            email: "bruno@email.com",
        });

        navigate("/dashboard");
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <button
                onClick={handleLogin}
                className="rounded bg-emerald-500 px-6 py-3 font-bold"
            >
                Entrar
            </button>
        </div>
    );
}
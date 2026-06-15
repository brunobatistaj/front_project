import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import MarketsPage from "@/pages/MarketsPage";
import AssetDetailsPage from "@/pages/AssetDetailsPage";
import SettingsPage from "@/pages/SettingsPage";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/markets"
                    element={
                        <ProtectedRoute>
                            <MarketsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/asset/:symbol"
                    element={
                        <ProtectedRoute>
                            <AssetDetailsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <SettingsPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
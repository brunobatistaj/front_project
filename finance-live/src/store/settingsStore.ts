import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark";

interface SettingsState {
    theme: Theme;
    itemsPerPage: number;

    setTheme: (theme: Theme) => void;
    setItemsPerPage: (value: number) => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            theme: "dark",
            itemsPerPage: 5,

            setTheme: (theme) =>
                set({ theme }),

            setItemsPerPage: (itemsPerPage) =>
                set({ itemsPerPage }),
        }),
        {
            name: "finance-live-settings",
        }
    )
);
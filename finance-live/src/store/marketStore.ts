import { create } from "zustand";
import type { Asset } from "@/types/asset";

interface MarketState {
    assets: Asset[];

    setAssets: (assets: Asset[]) => void;
}

export const useMarketStore = create<MarketState>((set) => ({
    assets: [],

    setAssets: (assets) => set({ assets }),
}));
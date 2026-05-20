import { ReactNode, useEffect } from "react";

import { socket } from "@/services/websocket/socket";
import { useMarketStore } from "@/store/marketStore";

import type { Asset } from "@/types/asset";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({
    children,
}: ProvidersProps) {
    const setAssets = useMarketStore(
        (state) => state.setAssets
    );

    useEffect(() => {
        socket.on("market:update", (data: Asset[]) => {
            setAssets(data);
        });

        return () => {
            socket.off("market:update");
        };
    }, [setAssets]);

    return children;
}
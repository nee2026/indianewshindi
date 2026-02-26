"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

export default function GoogleAnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.gtag) return;

        window.gtag("event", "page_view", {
            page_path: pathname,
        });
    }, [pathname]);

    return null;
}
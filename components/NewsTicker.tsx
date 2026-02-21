"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchHomepageData } from "../services/api";
import { TickerItem } from "../types";

export default function NewsTicker() {
    const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchHomepageData();
                if (data.ticker) {
                    setTickerItems(data.ticker);
                }
            } catch (error) {
                console.error("Error loading ticker data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, []);

    if (isLoading) {
        return (
            <div className="bg-white border-y border-gray-200 py-1 flex items-center relative z-40 overflow-hidden h-[34px]">
                <div className="bg-black hidden sm:block text-white px-4 py-1.5 text-[10px] font-bold uppercase shrink-0 z-10 tracking-widest">
                    Breaking News
                </div>
                <div className="w-full flex items-center animate-pulse space-x-8 px-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded w-1/3"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (tickerItems.length === 0) {
        return null;
    }

    return (
        <div className="bg-white border-y border-gray-200 py-1 flex items-center relative z-40 overflow-hidden">
            <div className="bg-black hidden sm:block text-white px-4 py-1.5 text-[10px] font-bold uppercase shrink-0 z-10 tracking-widest">
                Breaking News
            </div>
            <div className="flex whitespace-nowrap animate-marquee items-center text-black">
                {tickerItems.map((item) => (
                    <div key={item.id} className="mx-8 flex items-center text-sm font-medium font-serif tracking-wide">
                        <span className="text-primary font-bold mr-2">/</span>
                        <Link href={`/post/${item.id}/${item.slug}`} className="hover:underline">
                            {item.title}
                        </Link>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {tickerItems.map((item) => (
                    <div key={`dup-${item.id}`} className="mx-8 flex items-center text-sm font-medium tracking-wide">
                        <span className="text-primary font-bold mr-2">/</span>
                        <Link href={`/post/${item.id}/${item.slug}`} className="hover:underline">
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

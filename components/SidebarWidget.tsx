"use client";

import Link from "next/link";
import { Article } from "../types";

interface SidebarWidgetProps {
    title: string;
    articles: Article[];
}

export default function SidebarWidget({ title, articles }: SidebarWidgetProps) {
    return (
        <div className="mb-8">
            <div className="mb-6 border-b border-gray-200 pb-2 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white bg-primary px-3 py-1 uppercase tracking-widest inline-block shadow-sm">
                    {title}
                </h3>
            </div>

            <div className="flex flex-col gap-6">
                {articles.map((article, index) => (
                    <Link key={article.id} href={`/news/${article.slug}`} className="flex gap-4 group items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <span className="text-4xl font-black text-gray-200 group-hover:text-primary -mt-3 w-8 text-center font-serif italic transition duration-300">
                            {index + 1}
                        </span>
                        <div className="flex-1">
                            <h4 className="text-base font-bold text-black group-hover:text-primary leading-snug font-serif transition duration-200">
                                {article.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">{article.category}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";

interface NewsSectionProps {
    title: string;
    articles: Article[];
    viewAllLink?: string;
    layout?: "grid" | "list";
}

export default function NewsSection({ title, articles, viewAllLink = "#", layout = "grid" }: NewsSectionProps) {
    return (
        <div className="mb-12">
            <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-2">
                <h3 className="text-sm font-bold text-white bg-primary px-3 py-1 uppercase tracking-widest inline-block shadow-sm">
                    {title}
                </h3>
                <Link href={viewAllLink} className="text-gray-500 text-xs font-bold uppercase tracking-wider hover:text-primary mb-1">
                    View All
                </Link>
            </div>

            <div className={layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" : "flex flex-col gap-8"}>
                {articles.map((article) => (
                    <div key={article.id} className={`group ${layout === "list" ? "flex gap-6 items-start border-b border-gray-100 pb-6 last:border-0" : ""}`}>
                        {/* Image Container */}
                        <div className={`relative overflow-hidden ${layout === "list" ? "w-[180px] h-[120px] shrink-0" : "w-full aspect-[3/2] mb-4"}`}>
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Content Container */}
                        <div className={layout === "list" ? "flex-1" : ""}>
                            {layout === "grid" && (
                                <div className="mb-2">
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                                </div>
                            )}
                            <Link href={`/news/${article.slug}`}>
                                <h4 className={`font-serif font-bold text-black group-hover:text-primary transition leading-tight ${layout === "list" ? "text-lg md:text-xl line-clamp-2" : "text-xl line-clamp-2"}`}>
                                    {article.title}
                                </h4>
                            </Link>
                            {layout === "grid" && (
                                <p className="text-gray-600 text-sm mt-3 line-clamp-3 font-serif leading-relaxed">
                                    {article.excerpt}
                                </p>
                            )}
                            {layout === "list" && (
                                <p className="text-gray-500 text-xs mt-2 line-clamp-2 font-serif">
                                    {article.excerpt}
                                </p>
                            )}
                            {/* Metadata */}
                            <div className="text-gray-400 text-[10px] mt-3 uppercase tracking-widest flex items-center gap-2">
                                <span>{article.author}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>{article.publishedAt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

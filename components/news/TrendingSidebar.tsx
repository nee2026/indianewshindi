"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Eye, ChevronDown } from "lucide-react";
import { TrendingPost } from "@/types";
import { getAbsoluteImageUrl, formatDate, cn } from "@/lib/utils";

interface TrendingSidebarProps {
    posts: TrendingPost[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({ posts }) => {
    const [showAll, setShowAll] = useState(false);

    // Filter logic:
    // Mobile (!lg): Show 5 if !showAll, else show all.
    // Desktop (lg): Always show all (but they may be hidden by overflow/height, handled by CSS).
    // Actually simpler: Render ALL, but use CSS to hide > 5 on mobile if !showAll.
    // That way we don't need distinct arrays.

    return (
        <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
            <div className="bg-white rounded-xl shadow-lg lg:shadow-sm border border-gray-100 p-4 lg:h-full flex flex-col">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span>Trending Now</span>
                </h3>
                <div className="space-y-4 lg:overflow-y-auto lg:scrollbar-hide lg:flex-1 lg:pr-1">
                    {posts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/post/${post.id}/${post.slug}`}
                            className={cn(
                                "group gap-3 items-start",
                                // Logic: Hidden on mobile if index >= 5 and not showing all.
                                // Always flex on desktop.
                                (!showAll && index >= 5) ? "hidden lg:flex" : "flex"
                            )}
                        >
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={getAbsoluteImageUrl(post.feature_image_url || post.image)}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wide">
                                    {typeof post.category === 'object' && post.category ? post.category.name : post.category || 'News'}
                                </span>
                                <h4 className="text-sm font-semibold font-serif text-gray-800 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-400">
                                    <div className="flex items-center gap-1">

                                        <span>{formatDate(post.date)}</span>
                                    </div>

                                    {post.views && (
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            <span>{post.views}</span>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* View More Button - Mobile Only */}
                    {!showAll && posts.length > 5 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="w-full mt-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-1 lg:hidden"
                        >
                            View All Trending <ChevronDown size={16} />
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default TrendingSidebar;

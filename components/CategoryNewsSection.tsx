"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { fetchHomepageData } from '../services/api';
import { HomeCategorySection } from '../types';

import { getAbsoluteImageUrl } from '@/lib/utils';
import Image from 'next/image';

const CategoryNewsSection = () => {
    const [categorySections, setCategorySections] = useState<HomeCategorySection[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchHomepageData();
                if (data.home_category_sections) {
                    setCategorySections(data.home_category_sections);
                }
            } catch (error) {
                console.error("Error loading category sections:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    if (!isLoading && categorySections.length === 0) return null;

    return (
        <section className="py-12 border-t rounded-3xl border-primary/10 bg-white dark:bg-neutral-dark/30 font-display">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-8">
                    <Zap className="text-primary fill-current" />
                    <h2 className="text-2xl font-black text-neutral-dark dark:text-white uppercase tracking-tight">Category Briefs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {isLoading ? (
                        // Skeleton Loader
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="space-y-6 animate-pulse">
                                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                <div className="space-y-4">
                                    <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <div className="h-16 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-16 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        categorySections
                            .filter((section) => section.posts.length > 0)
                            .slice(0, 6)
                            .map((section) => {
                                const featured = section.posts[0];
                                const others = section.posts.slice(1);

                                if (!featured) return null;

                                return (
                                    <div key={section.category} className="space-y-6">
                                        {/* Category Header */}
                                        <div className="border-b-2 border-primary mb-6 flex justify-between items-end">
                                            <span className="bg-primary text-white px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest inline-block transform translate-y-[2px]">
                                                {section.category}
                                            </span>
                                        </div>

                                        {/* Featured Article in Category */}
                                        <article className="group cursor-pointer">
                                            <Link href={`/post/${featured.id}/${featured.slug}`}>
                                                <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group">

                                                    <Image
                                                        src={getAbsoluteImageUrl(featured.feature_image_url)}
                                                        alt={featured.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />

                                                </div>
                                                <h3 className="hindi-headline text-lg font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors leading-relaxed line-clamp-3">
                                                    {featured.title}
                                                </h3>

                                            </Link>
                                        </article>

                                        {/* List Articles in Category */}
                                        <div className="space-y-4 pt-2">
                                            {others.map((item, index) => (
                                                <div key={item.id} className={`group cursor-pointer ${index !== others.length - 1 ? 'pb-4 border-b border-dashed border-neutral-200 dark:border-white/10' : ''}`}>
                                                    <Link href={`/post/${item.id}/${item.slug}`}>
                                                        <h4 className="hindi-headline text-base font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-primary transition-colors leading-relaxed line-clamp-2">
                                                            {item.title}
                                                        </h4>

                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })
                    )}
                </div>
            </div>
        </section>
    );
};

export default CategoryNewsSection;

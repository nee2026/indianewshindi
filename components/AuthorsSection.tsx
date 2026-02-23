"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Youtube, Globe } from 'lucide-react';
import { fetchAuthorsList } from '@/services/api';
import { AuthorResponse } from '@/types';

const AuthorsSection = () => {
    const [authorsList, setAuthorsList] = useState<AuthorResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadAuthors() {
            try {
                const data = await fetchAuthorsList();
                if (data && data.results) {
                    setAuthorsList(data.results);
                }
            } catch (error) {
                console.error("Failed to load authors:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadAuthors();
    }, []);

    if (isLoading) {
        return (
            <div className="py-12 bg-[#321a1a] rounded-3xl flex items-center justify-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (authorsList.length === 0) {
        return null;
    }
    return (
        <section className="py-12 bg-[#321a1a] rounded-3xl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-row items-center justify-between mb-8 gap-4">
                    <div className="text-left">
                        <h2 className="hindi-headline text-2xl md:text-4xl font-bold text-white mb-1">
                            हमारे लेखक <span className="text-primary">.</span>
                        </h2>
                        <p className="text-white/60 font-display text-[10px] md:text-sm uppercase tracking-widest hidden md:block">
                            Meet the Voices Behind the News
                        </p>
                    </div>
                    {/* <Link href="/authors" className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-primary/80 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-primary/50 whitespace-nowrap">
                        View All
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link> */}
                </div>

                {/* Grid Layout (No scrollbar, dark theme) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {authorsList.map((author, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 rounded-2xl p-4 md:p-6 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden backdrop-blur-sm"
                        >
                            <Link
                                href={`/author/${author.username}`}
                                className="absolute inset-0 z-20"
                                aria-label={`View ${author.username}'s profile`}
                            />

                            {/* Decorative Background Gradient */}
                            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-primary/10 to-transparent opacity-100 transition-opacity"></div>

                            {/* Image with Ring */}
                            <div className="relative mb-3 md:mb-6 mt-2 pointer-events-none">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-white/5 group-hover:from-primary group-hover:to-primary/50 transition-colors duration-500 relative box-border border border-white/10 group-hover:border-primary/20">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        {author.profile_image ? (
                                            <Image
                                                src={author.profile_image}
                                                alt={author.first_name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/80 text-3xl font-bold">
                                                {author.first_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 right-0 bg-[#321a1a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-white/10 group-hover:scale-105 transition-transform">
                                    {author.posts?.length || 0}+
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative w-full pointer-events-none">
                                <h3 className="text-sm md:text-lg font-bold text-primary/80 mb-1 group-hover:text-primary transition-colors truncate w-full">
                                    {author.first_name}
                                </h3>

                                {author.bio && (
                                    <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-3 md:line-clamp-2">
                                        {author.bio}
                                    </p>
                                )}

                                {/* Social Links */}
                                <div className="hidden md:flex justify-center gap-2 md:gap-3 opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity md:transform md:translate-y-2 md:group-hover:translate-y-0 duration-300 relative z-30 pointer-events-auto">
                                    {author.twitter && (
                                        <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all border border-white/10">
                                            <Twitter size={12} />
                                        </a>
                                    )}
                                    {author.linkedin && (
                                        <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all border border-white/10">
                                            <Linkedin size={12} />
                                        </a>
                                    )}
                                    {author.instagram && (
                                        <a href={author.instagram} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all border border-white/10">
                                            <Instagram size={12} />
                                        </a>
                                    )}
                                    {author.youtube && (
                                        <a href={author.youtube} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all border border-white/10">
                                            <Youtube size={12} />
                                        </a>
                                    )}
                                    {author.website && (
                                        <a href={author.website} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all border border-white/10">
                                            <Globe size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuthorsSection;

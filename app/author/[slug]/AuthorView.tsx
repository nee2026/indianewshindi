"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Youtube, Globe, Facebook, Calendar, ArrowLeft } from 'lucide-react'
import { AuthorResponse } from '@/types'

interface Props {
    author: AuthorResponse
}

export default function AuthorView({ author }: Props) {

    if (!author) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Author Not Found
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background-light text-neutral-dark">
            <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-left">

                {/* ==== YOUR UI EXACTLY SAME FROM HERE ==== */}
                {/* (keep everything you already wrote — no change) */}

                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-neutral-dark/60 hover:text-primary transition-colors mb-6 group"
                >
                    <ArrowLeft
                        size={18}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Home
                </Link>

                {/* Profile Hero */}
                <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 border border-black/5 relative overflow-hidden shadow-soft">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                        {/* Avatar */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-110 opacity-30 group-hover:opacity-60 transition-opacity"></div>

                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden border-2 border-black/5 relative z-10 box-border group-hover:border-primary/30 transition-colors shadow-medium">
                                {author.profile_image ? (
                                    <Image
                                        src={author.profile_image}
                                        alt={author.first_name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-neutral-dark/10 text-5xl font-bold">
                                        {author.first_name.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-dark">
                                {author.first_name} <span className="text-primary">.</span>
                            </h1>

                            <p className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-6">
                                Editorial Team
                            </p>

                            {author.bio && (
                                <p className="text-neutral-dark/70 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                                    {author.bio}
                                </p>
                            )}

                            {/* Social Links */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                {author.twitter && (
                                    <a
                                        href={author.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-primary text-neutral-dark/40 hover:text-white transition-all border border-black/5 shadow-sm"
                                    >
                                        <Twitter size={20} />
                                    </a>
                                )}

                                {author.linkedin && (
                                    <a
                                        href={author.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-primary text-neutral-dark/40 hover:text-white transition-all border border-black/5 shadow-sm"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                )}

                                {author.facebook && (
                                    <a
                                        href={author.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-primary text-neutral-dark/40 hover:text-white transition-all border border-black/5 shadow-sm"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                )}

                                {author.instagram && (
                                    <a
                                        href={author.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-primary text-neutral-dark/40 hover:text-white transition-all border border-black/5 shadow-sm"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                )}

                                {author.youtube && (
                                    <a
                                        href={author.youtube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-primary text-neutral-dark/40 hover:text-white transition-all border border-black/5 shadow-sm"
                                    >
                                        <Youtube size={20} />
                                    </a>
                                )}

                                {author.website && (
                                    <a
                                        href={author.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-primary text-neutral-dark/40 hover:text-white transition-all border border-black/5 shadow-sm"
                                    >
                                        <Globe size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                            Articles by {author.first_name}
                        </h2>

                        <div className="h-px flex-1 bg-black/5"></div>

                        <span className="text-neutral-dark/30 text-sm font-display uppercase tracking-widest">
                            {author.posts?.length || 0} Posts
                        </span>
                    </div>

                    {author.posts && author.posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {author.posts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/post/${post.id}/${post.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-primary/20 transition-all shadow-soft hover:shadow-medium"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        {post.feature_image_url ? (
                                            <Image
                                                src={post.feature_image_url}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-50 flex items-center justify-center text-neutral-dark/10 font-bold uppercase tracking-widest text-xs">
                                                No Image
                                            </div>
                                        )}

                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                                                Article
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 text-left">
                                        <div className="flex items-center gap-2 text-neutral-dark/40 text-xs mb-3 font-medium">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>

                                        <h3 className="hindi-headline text-lg font-bold text-neutral-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-black/5 shadow-soft">
                            <p className="text-neutral-dark/40">
                                No articles published by this author yet.
                            </p>
                        </div>
                    )}
                </div>

            </main>
        </div>
    )
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { categories } from "../data/categories";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <>
            {/* Top Utility Bar - Minimalist */}
            {/* <div className="bg-background-light dark:bg-neutral-dark border-b border-black/5 dark:border-white/5 py-1.5 font-display">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center text-[10px] sm:text-xs font-medium tracking-wide text-neutral-dark/60 dark:text-white/60">
                    <div className="flex items-center gap-4">

                        <span className="hidden sm:inline">Tuesday, 24 October 2023</span>
                        <span className="hidden sm:inline">New Delhi 24°C</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a className="hover:text-primary transition-colors" href="#">App</a>
                        <a className="hover:text-primary transition-colors" href="#">Newsletter</a>
                        <div className="flex items-center gap-1.5 ml-2 pl-4 border-l border-black/10 dark:border-white/10">
                            <Globe size={12} />
                            <span>EN</span>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Sticky Navigation & Branding */}
            <header className="sticky top-0 z-50 bg-white font-display transition-all duration-300 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo - Always visible now */}
                        <div className="flex items-center gap-4 min-w-0 z-20 shrink-0">
                            <Link
                                href="/"
                                className="group flex items-center gap-2 shrink-0 notranslate"
                                translate="no"
                            >
                                <div className="text-2xl sm:text-3xl font-black tracking-tighter text-primary flex items-center">
                                    <span className="border-l-[3px] border-primary pl-2 uppercase">
                                        INDIA
                                    </span>
                                    <span className="text-neutral-dark dark:text-white ml-1">
                                        NEWS
                                    </span>
                                </div>

                                <span className={`${isSearchOpen ? 'hidden sm:block' : 'block'} px-1.5 py-0.5 rounded text-[12px] font-bold bg-primary/10 text-primary tracking-widest uppercase`}>
                                    हिन्दी
                                </span>
                            </Link>

                        </div>

                        {/* Search Active State - Flex container taking remaining space */}
                        {isSearchOpen ? (
                            <div className="flex-1 flex items-center sm:gap-2 ml-2 sm:ml-6 animate-in fade-in slide-in-from-right-5 duration-200">
                                <div className="relative w-full">
                                    {/* <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark/40 dark:text-white/40" /> */}
                                    <input
                                        type="text"
                                        placeholder="Search news..."
                                        className="w-full bg-black/5 dark:bg-white/10 border-none outline-none text-sm sm:text-base rounded-full pl-10 pr-4 py-2.5 text-neutral-dark dark:text-white placeholder:text-neutral-dark/40 dark:placeholder:text-white/40"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <button
                                    onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-neutral-dark/60 dark:text-white/60 hover:text-red-500 shrink-0"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Centered Navigation (Desktop) */}
                                <nav className="hidden lg:flex items-center gap-1">
                                    {categories.map((cat) => (
                                        <div key={cat.slug} className="relative group">
                                            <Link
                                                href={`/category${cat.slug}`}
                                                className="flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wide text-neutral-dark/70 dark:text-white/70 hover:text-primary transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full"
                                            >
                                                {cat.name}
                                                {cat.subCategories && <ChevronDown size={10} />}
                                            </Link>

                                            {/* Dropdown Menu */}
                                            {cat.subCategories && (
                                                <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-neutral-dark rounded-xl shadow-xl border border-black/5 dark:border-white/5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50 translate-y-2 group-hover:translate-y-0">
                                                    <div className="py-2 flex flex-col">
                                                        {cat.subCategories.map((sub) => (
                                                            <Link
                                                                key={sub.slug}
                                                                href={`/category${sub.slug}`}
                                                                className="px-4 py-2 text-xs font-medium text-neutral-dark/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors text-left"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                {/* Right Tools - Search Toggle */}
                                <div className="flex items-center gap-3 z-20">
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 text-neutral-dark dark:text-white transition-all"
                                    >
                                        {/* <Search size={22} className="stroke-[2.5]" /> */}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation - Sleek Horizontal Strip (No Scrollbar) */}
                <div className="lg:hidden border-t border-black/5 dark:border-white/5 bg-background-light dark:bg-neutral-dark/95 backdrop-blur-sm">
                    <div className="overflow-x-auto scrollbar-hide py-2">
                        <div className="flex items-center px-4 gap-4 min-w-max">

                            {categories.map((cat) => (
                                <div key={cat.slug} className="flex items-center gap-1">
                                    {cat.subCategories ? (
                                        <button
                                            onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
                                            className={`text-xs font-bold uppercase tracking-wide transition-colors ${selectedCategory === cat.slug ? 'text-primary' : 'text-neutral-dark/60 dark:text-white/60 hover:text-neutral-dark dark:hover:text-white'}`}
                                        >
                                            {cat.name}
                                        </button>
                                    ) : (
                                        <Link
                                            href={`/category${cat.slug}`}
                                            className="text-xs font-bold uppercase tracking-wide text-neutral-dark/60 dark:text-white/60 hover:text-neutral-dark dark:hover:text-white transition-colors"
                                            onClick={() => setSelectedCategory(null)}
                                        >
                                            {cat.name}
                                        </Link>
                                    )}

                                    {cat.subCategories && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug);
                                            }}
                                            className={`p-1 rounded-full ${selectedCategory === cat.slug ? 'bg-primary/10 text-primary' : 'text-neutral-dark/40 dark:text-white/40'}`}
                                        >
                                            <ChevronDown size={10} className={`transition-transform duration-200 ${selectedCategory === cat.slug ? 'rotate-180' : ''}`} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Subcategories - Animated Expand (Vertical Dropdown) */}
                {categories.map((cat) => (
                    cat.slug === selectedCategory && cat.subCategories && (
                        <div key={`${cat.slug}-subs`} className="lg:hidden border-t border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-800 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col py-2">
                                {/* Option to go to main category page */}
                                <Link
                                    href={`/category${cat.slug}`}
                                    className="px-6 py-2.5 text-sm font-bold text-neutral-dark dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-primary"
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSelectedCategory(null);
                                    }}
                                >
                                    All {cat.name} News
                                </Link>
                                {cat.subCategories.map((sub) => (
                                    <Link
                                        key={sub.slug}
                                        href={`/category${sub.slug}`}
                                        className="px-6 py-2.5 text-sm font-medium text-neutral-dark/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                                        onClick={() => {
                                            setIsSearchOpen(false);
                                            setSelectedCategory(null);
                                        }}
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </header>
        </>
    );
}

"use client";

import { Mail } from "lucide-react";

export default function NewsletterSection() {
    return (
        <section className="relative overflow-hidden rounded-3xl p-8 lg:p-16 text-center mt-8 mb-16 font-display isolate">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black"></div>
            <div className="hidden md:block absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            <div className="hidden md:block absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="hidden md:block absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white dark:bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium rotate-3 text-primary">
                    <Mail size={32} />
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-4 text-neutral-dark dark:text-white tracking-tight">
                    Stay ahead of the curve.
                </h2>
                <p className="text-neutral-dark/60 dark:text-white/60 mb-10 text-lg leading-relaxed">
                    Get the most important news from India and around the world directly in your inbox. No spam, just reliable news.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto p-1.5 bg-white dark:bg-neutral-800 rounded-xl sm:rounded-full border border-black/5 dark:border-white/5 shadow-medium">
                    <input
                        className="flex-grow bg-transparent px-6 py-3 text-neutral-dark dark:text-white placeholder-neutral-400 outline-none"
                        placeholder="Enter your email address"
                        type="email"
                    />
                    <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg sm:rounded-full hover:bg-neutral-dark dark:hover:bg-white dark:hover:text-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Subscribe
                    </button>
                </div>
                <p className="text-[10px] text-neutral-400 mt-6 uppercase tracking-widest font-bold">
                    Join 50,000+ Subscribers today
                </p>
            </div>
        </section>
    );
}

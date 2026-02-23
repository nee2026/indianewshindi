"use client";

import { Facebook, Camera, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white pt-24 pb-8 font-display border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12">

                    {/* Brand Section (Spans 2 columns on ALL screens) */}
                    <div className="col-span-2 lg:col-span-2 space-y-8 pr-0 lg:pr-12 mb-8 lg:mb-0">
                        {/* Huge Professional Logo */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-4 group notranslate"
                            translate="no"
                        >
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                                IN
                            </div>

                            <div>
                                <span className="block text-4xl font-black tracking-widest leading-none text-white group-hover:text-primary transition-colors">
                                    INDIA NEWS
                                </span>
                                <span className="block text-2xl font-medium text-white/40 leading-none tracking-[0.2em] mt-1">
                                    HINDI
                                </span>
                            </div>
                        </Link>

                        <p
                            className="text-neutral-400 text-lg leading-relaxed max-w-md notranslate"
                            translate="no"
                        >
                            India News Hindi delivers the most accurate, unbiased, and timely news
                            from every corner of the nation. Committed to truth and journalistic
                            integrity.
                        </p>


                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Camera, href: "#" } // Instagram placeholder
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <social.icon size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns - Side-by-side on mobile due to grid-cols-2 parent */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Sections
                        </h4>
                        <ul className="space-y-4">
                            {['India News', 'Politics', 'Entertainment', 'Sports', 'Business', 'Technology'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-primary hover:pl-2 transition-all duration-300 block text-base">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms of Service', href: '/terms-conditions' },
                                { name: 'Disclaimer', href: '/disclaimer' },
                                { name: 'Cookie Policy', href: '/cookie-policy' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-neutral-400 hover:text-primary hover:pl-2 transition-all duration-300 block text-base">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/login" className="text-white font-bold hover:text-primary hover:pl-2 transition-all duration-300 block text-base flex items-center gap-2">
                                    Login / Register
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* Bottom Footer */}
                {/* Bottom Footer Section */}
                <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 pb-4">
                    <div className="text-neutral-500 text-sm text-center lg:text-left order-2 lg:order-1">
                        © {currentYear} India News Hindi Media Pvt Ltd. All rights reserved.
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm order-1 lg:order-2">
                        <div className="flex items-center gap-2 text-neutral-500">
                            <span>Designed & Developed by</span>
                            <Link
                                href="https://trishikasolutions.com/"
                                target="_blank"
                                className="text-neutral-300 hover:text-primary transition-colors font-semibold"
                            >
                                Trishika Solutions
                            </Link>
                        </div>
                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10"></div>
                        <div className="flex items-center gap-2 text-neutral-500">
                            <span>Hiring Partner</span>
                            <Link
                                href="https://thehirex.com/"
                                target="_blank"
                                className="text-neutral-300 hover:text-primary transition-colors font-semibold"
                            >
                                The Hirex
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

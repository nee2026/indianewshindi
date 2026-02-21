"use client";

import React from 'react';
import { Cookie, Info, Settings, BarChart, ShoppingBag, Shield, Globe, Sliders, RefreshCw, Mail } from 'lucide-react';

export default function CookiePolicyPage() {
    return (
        <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#321a1a] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                        <Cookie size={16} className="text-primary" />
                        <span className="text-white/90">Policy Update</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Cookie Policy</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Learn how we use cookies to improve your experience.
                    </p>
                    <p className="mt-4 text-white/60 text-sm">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100 dark:border-neutral-700 space-y-12">

                    {/* 1. Introduction */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <Info size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">1. Introduction</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                This Cookie Policy explains how <span className="font-bold text-primary">IndianNewsHindi.com</span> uses cookies and similar tracking technologies to enhance your browsing experience, improve website performance, and provide personalized content.
                            </p>
                        </div>
                    </div>

                    {/* 2. What Are Cookies? */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <Cookie size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">2. What Are Cookies?</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Cookies are small text files stored on your device by websites you visit. They help websites function, remember preferences, and analyze usage patterns.
                            </p>
                        </div>
                    </div>

                    {/* 3. Types of Cookies We Use */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-4 border-b border-neutral-100 dark:border-neutral-700 pb-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                <Settings size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">3. Types of Cookies We Use</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Essential */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                                <div className="flex items-center gap-2 mb-3 text-primary">
                                    <Shield size={20} />
                                    <h3 className="font-bold text-lg text-neutral-800 dark:text-white">a) Essential Cookies</h3>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    These cookies are necessary for core website functions such as navigation, security, and access to certain features. Without them, the site may not work properly.
                                </p>
                            </div>

                            {/* Performance */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                                <div className="flex items-center gap-2 mb-3 text-primary">
                                    <BarChart size={20} />
                                    <h3 className="font-bold text-lg text-neutral-800 dark:text-white">b) Performance & Analytics</h3>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    We use tools like Google Analytics to understand visitor behavior, page performance, load times, and site usage statistics.
                                </p>
                            </div>

                            {/* Advertising */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                                <div className="flex items-center gap-2 mb-3 text-primary">
                                    <ShoppingBag size={20} />
                                    <h3 className="font-bold text-lg text-neutral-800 dark:text-white">c) Advertising Cookies</h3>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-2">
                                    Third-party advertising partners such as Google AdSense may use cookies to:
                                </p>
                                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm space-y-1 ml-1">
                                    <li>Show personalized advertisements</li>
                                    <li>Measure ad performance</li>
                                    <li>Avoid showing repeated ads</li>
                                </ul>
                            </div>

                            {/* Preference */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                                <div className="flex items-center gap-2 mb-3 text-primary">
                                    <Sliders size={20} />
                                    <h3 className="font-bold text-lg text-neutral-800 dark:text-white">d) Preference Cookies</h3>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    These cookies store user preferences such as language, region, and layout settings to improve user experience.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Third-Party Cookies */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <Globe size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">4. Third-Party Cookies</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">
                                Some cookies come from third-party services integrated into our site, such as:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Google Analytics', 'Google AdSense', 'YouTube embedded videos', 'Social media plugins'].map((item, idx) => (
                                    <span key={idx} className="bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
                                These third parties follow their own privacy and cookie policies.
                            </p>
                        </div>
                    </div>

                    {/* 5. How You Can Control Cookies */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/50">
                        <div className="flex items-center gap-3 mb-6">
                            <Sliders size={24} className="text-primary" />
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">5. How You Can Control Cookies</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                            You can manage, disable, or delete cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                        </p>

                        <h3 className="font-bold text-lg text-neutral-800 dark:text-white mb-4">Manage Cookies Using Browser Settings:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                            {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge', 'Opera'].map((browser) => (
                                <div key={browser} className="bg-white dark:bg-neutral-800 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-center font-medium text-neutral-600 dark:text-neutral-300 text-sm">
                                    {browser}
                                </div>
                            ))}
                        </div>
                        <p className="text-primary font-bold text-sm bg-primary/5 p-4 rounded-xl inline-block border border-primary/10">
                            💡 Tip: You may also use incognito/private mode to avoid storing cookies.
                        </p>
                    </div>

                    {/* 6. Updates to This Cookie Policy */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <RefreshCw size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">6. Updates to This Cookie Policy</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                We may update this Cookie Policy as technology or legal requirements change. Updates will be posted on this page with a revised date.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-neutral-100 dark:bg-neutral-700 my-8"></div>

                    {/* 7. Contact Information */}
                    <section className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail size={24} className="text-primary" />
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">7. Contact Information</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                            For questions about our Cookie Policy, contact:
                        </p>
                        <a href="mailto:support@indianewshindi.com" className="block text-primary font-bold hover:underline decoration-2 underline-offset-4 text-lg">
                            support@indianewshindi.com
                        </a>
                    </section>
                </div>
            </div>
        </main>
    );
}

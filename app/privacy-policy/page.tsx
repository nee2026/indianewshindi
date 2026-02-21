
import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, Globe, Calendar, Cookie, Scale, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy - India News Hindi',
    description: 'Privacy Policy for India News Hindi explaining how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#321a1a] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                        <Lock size={16} className="text-primary" />
                        <span className="text-white/90">Your Privacy Matters</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Privacy Policy</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Transparency is key. We are committed to protecting your personal information and your right to privacy.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100 dark:border-neutral-700 space-y-12">

                    {/* Introduction */}
                    <div className="border-b border-neutral-100 dark:border-neutral-700 pb-8">
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-loose">
                            At <span className="font-bold text-primary">IndianNewsHindi.com</span> (&quot;we&quot;, &quot;our&quot;, or &quot;the website&quot;), your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
                        </p>
                    </div>

                    {/* Section 1: Information We Collect */}
                    <section className="grid gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                <FileText size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">1. Information We Collect</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-[4.5rem]">
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50 hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-lg mb-3 text-neutral-800 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary block"></span>
                                    Personal Information
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    Information you provide voluntarily, e.g., name, email, when contacting us or subscribing to newsletters.
                                </p>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50 hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-lg mb-3 text-neutral-800 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary block"></span>
                                    Log & Device Data
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    IP address, browser type, device details, pages visited, timestamps, and referral URLs.
                                </p>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50 hover:border-primary/30 transition-colors md:col-span-2">
                                <h3 className="font-bold text-lg mb-3 text-neutral-800 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary block"></span>
                                    Cookies & Tracking
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    We use cookies and analytics tools (e.g., Google Analytics) to improve user experience, monitor traffic, and show relevant content and ads.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: How We Use Your Information */}
                    <section className="grid gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                <Eye size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">2. How We Use Your Information</h2>
                        </div>
                        <ul className="space-y-4 pl-0 md:pl-[4.5rem]">
                            {[
                                "To improve website content, layout, and performance.",
                                "To analyze visitor interactions and optimize user experience.",
                                "To respond to queries, feedback, or subscription requests.",
                                "To provide personalized content and advertisements based on user preferences."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 group">
                                    <ArrowRight size={20} className="text-primary mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 3: Cookies */}
                    <section className="grid gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                <Cookie size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">3. Cookies and Tracking Technologies</h2>
                        </div>
                        <div className="pl-0 md:pl-[4.5rem] prose prose-neutral dark:prose-invert max-w-none">
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Cookies are small files stored on your device. We use cookies to understand user behavior, improve our services, and show relevant ads. You may disable cookies through your browser, but some website functionality may be affected.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 & 5: Third Party & Security */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Third Party */}
                        <section className="bg-neutral-50 dark:bg-neutral-900/30 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe size={24} className="text-primary" />
                                <h2 className="text-xl font-bold text-neutral-dark dark:text-white">4. Third‑Party Services</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                                We may use third-party service providers such as Google AdSense, social media platforms, and analytics providers. These services may collect information via cookies or similar technologies to provide personalized ads and content.
                            </p>
                        </section>

                        {/* Security */}
                        <section className="bg-neutral-50 dark:bg-neutral-900/30 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/50">
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck size={24} className="text-primary" />
                                <h2 className="text-xl font-bold text-neutral-dark dark:text-white">5. Data Security</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                                We implement reasonable security measures to protect your information. However, no system is 100% secure. We encourage safe practices and do not guarantee absolute security of your data.
                            </p>
                        </section>
                    </div>

                    {/* Section 6 & 7: Children Privacy & Rights */}
                    <section className="grid md:grid-cols-2 gap-12 pt-4">
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="font-bold text-lg">6</span>
                                </div>
                                <h2 className="text-xl font-bold text-neutral-dark dark:text-white">Children’s Privacy</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed pl-[3.25rem]">
                                We do not knowingly collect personal information from children under 13. If you believe your child has provided us with personal data, please contact us to request removal.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Scale size={20} />
                                </div>
                                <h2 className="text-xl font-bold text-neutral-dark dark:text-white">7. Your Rights</h2>
                            </div>
                            <ul className="space-y-3 pl-[3.25rem]">
                                <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                                    <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 shrink-0"></span>
                                    <span>You can request access to the personal data we hold about you.</span>
                                </li>
                                <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                                    <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 shrink-0"></span>
                                    <span>You may request correction, deletion, or restriction of processing your data.</span>
                                </li>
                                <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                                    <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2 shrink-0"></span>
                                    <span>You can unsubscribe from newsletters and promotional emails at any time.</span>
                                </li>
                            </ul>
                        </section>
                    </section>

                    <div className="w-full h-px bg-neutral-100 dark:bg-neutral-700 my-8"></div>

                    {/* Contact & Updates */}
                    <section className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center bg-neutral-50 dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail size={24} className="text-primary" />
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">Contact Us</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                If you have any questions regarding this Privacy Policy, please contact:
                            </p>
                            <div className="space-y-1">
                                <a href="mailto:contact@indianewshindi.com" className="block text-primary font-bold hover:underline decoration-2 underline-offset-4">
                                    contact@indianewshindi.com
                                </a>
                                <a href="https://indianewshindi.com" target="_blank" rel="noopener noreferrer" className="block text-neutral-700 dark:text-neutral-300 font-bold hover:text-primary transition-colors">
                                    indianewshindi.com
                                </a>
                            </div>
                        </div>

                        <div className="w-px h-24 bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700 block md:hidden"></div>

                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar size={18} className="text-neutral-400" />
                                <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Effective Date</span>
                            </div>
                            <p className="text-lg font-bold text-neutral-800 dark:text-white">December 13, 2025</p>
                            <p className="text-xs text-neutral-500">
                                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}

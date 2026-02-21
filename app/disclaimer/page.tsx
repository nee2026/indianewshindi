"use client";

import React from 'react';
import { AlertTriangle, Info, CheckCircle, ExternalLink, Megaphone, Shield, UserX, PenTool, Scale, Mail } from 'lucide-react';

export default function DisclaimerPage() {
    return (
        <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#321a1a] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                        <AlertTriangle size={16} className="text-primary" />
                        <span className="text-white/90">Important Notice</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Disclaimer</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Please read this disclaimer carefully before using our website.
                    </p>
                    <p className="mt-4 text-white/60 text-sm">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100 dark:border-neutral-700 space-y-12">

                    {/* 1. General Information */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <Info size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">1. General Information</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                The information provided on <span className="font-bold text-primary">IndianNewsHindi.com</span> is for general informational purposes only. While we strive to keep information accurate and up to date, we make no warranties about completeness, reliability, or accuracy.
                            </p>
                        </div>
                    </div>

                    {/* 2. No Professional Advice */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <UserX size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">2. No Professional Advice</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                The content on this website does not constitute professional advice of any kind—including legal, financial, medical, or technical guidance. Users should seek expert advice when necessary.
                            </p>
                        </div>
                    </div>

                    {/* 3. Content Accuracy */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <CheckCircle size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">3. Content Accuracy</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Articles, opinions, news, and reports published may include human errors, data changes, or outdated information. IndianNewsHindi.com does not guarantee the correctness of every detail.
                            </p>
                        </div>
                    </div>

                    {/* 4. External Links Disclaimer */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <ExternalLink size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">4. External Links Disclaimer</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Our website may contain links to third-party websites. These external sites are not under our control, and we do not guarantee the accuracy, reliability, or safety of their content.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-300 font-bold">
                                Visiting external links is at your own risk.
                            </p>
                        </div>
                    </div>

                    {/* 5. Advertisement Disclaimer */}
                    <div className="flex gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                            <Megaphone size={24} />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">5. Advertisement Disclaimer</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                We use third-party advertising networks (including Google AdSense). Ads displayed on the site are controlled by advertisers, and IndianNewsHindi.com does not endorse any product or service shown in ads.
                            </p>
                        </div>
                    </div>

                    {/* 6. Fair Use Notice */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                        <div className="flex items-center gap-3 mb-3">
                            <Scale size={20} className="text-primary" />
                            <h2 className="text-xl font-bold text-neutral-dark dark:text-white">6. Fair Use Notice</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            Some content (images, news references, screenshots) may be used for reporting and educational purposes under fair use. Full credit is given to respective owners. If you believe your content has been used improperly, contact us for correction or removal.
                        </p>
                    </div>

                    {/* 7. Copyright & Ownership */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                        <div className="flex items-center gap-3 mb-3">
                            <PenTool size={20} className="text-primary" />
                            <h2 className="text-xl font-bold text-neutral-dark dark:text-white">7. Copyright & Ownership</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            All original content including articles, graphics, and data is the intellectual property of IndianNewsHindi.com. Unauthorized copying, republishing, or redistribution is prohibited.
                        </p>
                    </div>

                    {/* 8. Limitation of Liability */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                        <div className="flex items-center gap-3 mb-3">
                            <Shield size={20} className="text-primary" />
                            <h2 className="text-xl font-bold text-neutral-dark dark:text-white">8. Limitation of Liability</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-3">
                            IndianNewsHindi.com, its team, or contributors are not liable for any losses, damages, or issues arising from:
                        </p>
                        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm ml-2 space-y-1">
                            <li>Use of website information</li>
                            <li>Errors or omissions in content</li>
                            <li>External link usage</li>
                            <li>Advertiser products or services</li>
                        </ul>
                    </div>

                    {/* 9. User Responsibility */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                        <h2 className="text-xl font-bold text-neutral-dark dark:text-white mb-3">9. User Responsibility</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            Users must verify important information before making decisions. We are not responsible for any actions taken solely based on our content.
                        </p>
                    </div>

                    {/* 10. Consent */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                        <h2 className="text-xl font-bold text-neutral-dark dark:text-white mb-3">10. Consent</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            By using our website, you consent to this Disclaimer and agree to its terms.
                        </p>
                    </div>

                    <div className="w-full h-px bg-neutral-100 dark:bg-neutral-700 my-8"></div>

                    {/* 11. Contact Us */}
                    <section className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail size={24} className="text-primary" />
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">11. Contact Us</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                            If you have questions, concerns, or want to report an issue, contact:
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

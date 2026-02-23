import { Metadata } from "next"
import { FileText, Scale, Shield, Users, AlertTriangle, Lock, Globe, LinkIcon, Gavel, MessageCircle  } from "lucide-react"
import Link from "next/link"

/* =====================================================
   FORCE STATIC GENERATION
===================================================== */
export const dynamic = "force-static"

/* =====================================================
   SEO METADATA
===================================================== */
export const metadata: Metadata = {
    title: "Terms & Conditions | India News Hindi",
    description:
        "Read the Terms and Conditions of India News Hindi. Understand your rights, responsibilities, and legal policies when using our website.",

    alternates: {
        canonical: "https://indianewshindi.com/terms-conditions"
    },

    robots: {
        index: true,
        follow: true
    },

    openGraph: {
        title: "Terms & Conditions | India News Hindi",
        description:
            "Legal terms governing the use of India News Hindi website.",
        url: "https://indianewshindi.com/terms-conditions",
        siteName: "India News Hindi",
        type: "website",
        images: [
            {
                url: "https://indianewshindi.com/icon2.png",
                width: 1200,
                height: 630,
                alt: "Terms and Conditions"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | India News Hindi",
        description:
            "Legal terms for using India News Hindi website.",
        images: ["https://indianewshindi.com/icon2.png"]
    }
}

/* =====================================================
   PAGE
===================================================== */
export default function TermsConditionsPage() {

    /* =====================================================
       LEGAL PAGE STRUCTURED DATA
    ===================================================== */
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms and Conditions",
        url: "https://indianewshindi.com/terms-conditions",
        description:
            "Terms and Conditions explaining legal agreement between users and India News Hindi.",
        inLanguage: "en-IN",
        isPartOf: {
            "@type": "WebSite",
            name: "India News Hindi",
            url: "https://indianewshindi.com"
        }
    }

    /* =====================================================
       BREADCRUMB SCHEMA
    ===================================================== */
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://indianewshindi.com"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Terms & Conditions",
                item: "https://indianewshindi.com/terms-conditions"
            }
        ]
    }

    return (
        <>
            {/* Legal page schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Breadcrumb schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen font-sans">
                {/* Hero Section */}
                <section className="relative py-20 bg-[#321a1a] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                            <Scale size={16} className="text-primary" />
                            <span className="text-white/90">Legal Agreement</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Terms & Conditions</h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Please read these terms carefully before using our website.
                        </p>
                        <p className="mt-4 text-white/60 text-sm">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </section>

                <div className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-20">
                    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100 dark:border-neutral-700 space-y-12">

                        {/* 1. Acceptance of Terms */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <FileText size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">1. Acceptance of Terms</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    By accessing <span className="font-bold text-primary">IndianNewsHindi.com</span>, you agree to comply with these Terms & Conditions. If you do not agree, please discontinue using the website.
                                </p>
                            </div>
                        </div>

                        {/* 2. Website Purpose */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <Globe size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">2. Website Purpose</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    IndianNewsHindi.com provides news, articles, and informational content in Hindi for general knowledge purposes. We do not guarantee complete accuracy at all times.
                                </p>
                            </div>
                        </div>

                        {/* 3. User Responsibilities */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <Users size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">3. User Responsibilities</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                                        <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"></span>
                                        <span>You agree not to misuse, hack, or disrupt website services.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                                        <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"></span>
                                        <span>You must not copy or republish content without permission.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                                        <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"></span>
                                        <span>You must not post abusive, illegal, or harmful content.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Intellectual Property Rights */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <Shield size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">4. Intellectual Property Rights</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    All content on this website is the property of IndianNewsHindi.com. Reproduction or redistribution without written permission is prohibited.
                                </p>
                            </div>
                        </div>

                        {/* 5. External Links */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <LinkIcon size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">5. External Links</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    We may link to external websites. We are not responsible for their content, policies, accuracy, or safety.
                                </p>
                            </div>
                        </div>

                        {/* 6. Accuracy of Information */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <AlertTriangle size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">6. Accuracy of Information</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    While we strive for accuracy, news and information may change over time. We do not guarantee completeness or 100% accuracy of published content.
                                </p>
                            </div>
                        </div>

                        {/* 7. Advertisement Policy */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <Gavel size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">7. Advertisement Policy</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    IndianNewsHindi.com uses third-party ad providers like Google AdSense. Cookies may be used to show relevant ads as per their policies.
                                </p>
                            </div>
                        </div>

                        {/* 8. Privacy */}
                        <div className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-fit">
                                <Lock size={24} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">8. Privacy</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    Use of the website is governed by our <Link href="/privacy-policy" className="text-primary hover:underline font-bold">Privacy Policy</Link>. Please review it carefully.
                                </p>
                            </div>
                        </div>

                        {/* 9. Limitation of Liability */}
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                            <h2 className="text-xl font-bold text-neutral-dark dark:text-white mb-3">9. Limitation of Liability</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                IndianNewsHindi.com will not be liable for any damages, losses, or actions taken based on website content.
                            </p>
                        </div>

                        {/* 10. User-Generated Content */}
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                            <h2 className="text-xl font-bold text-neutral-dark dark:text-white mb-3">10. User-Generated Content</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                Comments or content submitted by users must comply with legal and ethical standards. We reserve the right to remove inappropriate content.
                            </p>
                        </div>

                        {/* 11. Termination of Access */}
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                            <h2 className="text-xl font-bold text-neutral-dark dark:text-white mb-3">11. Termination of Access</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                We may restrict or remove website access if misuse or suspicious activity is detected.
                            </p>
                        </div>

                        {/* 12. Governing Law */}
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
                            <div className="flex items-center gap-2 mb-3">
                                <Scale size={20} className="text-primary" />
                                <h2 className="text-xl font-bold text-neutral-dark dark:text-white">12. Governing Law</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                These Terms are governed by Indian law. Legal matters will be handled under applicable Indian jurisdiction.
                            </p>
                        </div>

                        <div className="w-full h-px bg-neutral-100 dark:bg-neutral-700 my-8"></div>

                        {/* 13. Contact Information */}
                        <section className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageCircle size={24} className="text-primary" />
                                <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">13. Contact Information</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                For queries regarding these Terms & Conditions, contact:
                            </p>
                            <a href="mailto:officialindianewshindi2026@gmail.com" className="block text-primary font-bold hover:underline decoration-2 underline-offset-4 text-lg">
                                officialindianewshindi2026@gmail.com
                            </a>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

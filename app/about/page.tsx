import { Metadata } from "next"
import {
    ShieldCheck,
    Target,
    Eye,
    Users,
    Mail,
    CheckCircle2
} from "lucide-react"

/* =====================================================
   FORCE STATIC GENERATION (SSG)
===================================================== */
export const dynamic = "force-static"

/* =====================================================
   SEO METADATA (FULL)
===================================================== */
export const metadata: Metadata = {
    title: "About Us | India News Hindi",
    description:
        "Learn about India News Hindi, our mission, vision, editorial policy, and commitment to reliable journalism.",

    alternates: {
        canonical: "https://indianewshindi.com/about"
    },

    robots: {
        index: true,
        follow: true
    },

    openGraph: {
        title: "About India News Hindi",
        description:
            "Learn about our mission, vision, and commitment to accurate Hindi journalism.",
        url: "https://indianewshindi.com/about",
        siteName: "India News Hindi",
        type: "website",
        images: [
            {
                url: "https://indianewshindi.com/icon2.png",
                width: 1200,
                height: 630,
                alt: "India News Hindi"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "About India News Hindi",
        description:
            "Learn about our mission, vision, and commitment to accurate Hindi journalism.",
        images: ["https://indianewshindi.com/icon2.png"]
    }
}

/* =====================================================
   PAGE
===================================================== */
export default function AboutPage() {

    /* =====================================================
       STRUCTURED DATA
    ===================================================== */

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        name: "India News Hindi",
        url: "https://indianewshindi.com",
        logo: {
            "@type": "ImageObject",
            url: "https://indianewshindi.com/icon2.png",
            width: 512,
            height: 512
        },
        sameAs: [
            "https://facebook.com",
            "https://twitter.com",
            "https://instagram.com"
        ]
    }

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
                name: "About",
                item: "https://indianewshindi.com/about"
            }
        ]
    }

    return (
        <>
            {/* Organization schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />

            {/* Breadcrumb schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
            <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 bg-[#321a1a] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">About <span className="text-primary">IndiaNewsHindi.com</span></h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Your trusted destination for fast, accurate, and unbiased Hindi news.
                        </p>
                    </div>
                </section>

                <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

                    {/* Who We Are */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                                <Users size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-dark dark:text-white">Who We Are</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-loose text-lg">
                                <span className="font-bold text-primary">IndianNewsHindi.com</span> is a fast-growing digital Hindi news platform dedicated to delivery reliable, factual, and real-time updates from India and around the world. Our goal is simple — provide news that informs, empowers, and creates awareness in society.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-700 relative overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                            <h3 className="text-xl font-bold mb-4 text-neutral-dark dark:text-white">Our Core Values</h3>
                            <ul className="space-y-4">
                                {['Accuracy & Fact-Checking', 'Unbiased Reporting', 'Reader-First Approach', 'Real-Time Updates'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                                        <CheckCircle2 size={20} className="text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-primary">
                            <Target size={40} className="text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-neutral-dark dark:text-white">Our Mission</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                To deliver accurate, unbiased, and comprehensive Hindi news that helps readers stay informed and form their own opinions without manipulation.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-neutral-dark dark:border-white">
                            <Eye size={40} className="text-neutral-dark dark:text-white mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-neutral-dark dark:text-white">Our Vision</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                To become India’s most trusted and reader-focused Hindi digital news platform with a commitment to journalism ethics, transparency, and credibility.
                            </p>
                        </div>
                    </section>

                    {/* What We Cover */}
                    <section className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100 dark:border-neutral-700">
                        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-dark dark:text-white">What We Cover</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                'Breaking News', 'Politics', 'Business', 'Technology',
                                'Health', 'Education', 'Sports', 'Entertainment'
                            ].map((topic, idx) => (
                                <div key={idx} className="text-center p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-700 hover:border-primary/50 hover:shadow-md transition-all cursor-default">
                                    <span className="font-bold text-neutral-700 dark:text-neutral-200">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Why Trust Us & Policy */}
                    <section className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck size={28} className="text-primary" />
                                    <h3 className="text-2xl font-bold text-neutral-dark dark:text-white">Why Trust Us?</h3>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-4">We verify every piece of news before publishing. Your trust and time are our highest priority.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300"><span className="text-primary mt-1">•</span> We do not support fake news or biased reporting.</li>
                                    <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300"><span className="text-primary mt-1">•</span> We strictly follow editorial and fact-checking guidelines.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-neutral-dark dark:text-white mb-4">Our Editorial Policy</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
                                    Every report published on IndianNewsHindi.com undergoes multiple layers of review to ensure accuracy, fairness, and neutrality. Our editors strictly follow journalistic ethics and guidelines to maintain transparency.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#321a1a] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Our Team & Commitment</h3>
                                <p className="text-white/80 mb-6 leading-relaxed">
                                    Powered by dedicated journalists, editors, and writers who work passionately to bring news that matters. We believe every reader deserves truthful, relevant, and unbiased information.
                                </p>
                                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="text-center max-w-2xl mx-auto pt-8 border-t border-neutral-200 dark:border-neutral-700">
                        <h2 className="text-3xl font-bold mb-6 text-neutral-dark dark:text-white">Contact Us</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                            We value your feedback and suggestions. For inquiries, collaborations, or news submissions, contact us at:
                        </p>
                        <a href="mailto:officialindianewshindi2026@gmail.com" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 group">
                            <Mail size={24} />
                            officialindianewshindi2026@gmail.com
                        </a>
                    </section>

                </div>
            </main>
        </>
    );
}

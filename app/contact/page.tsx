import { Metadata } from "next"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

/* =====================================================
   FORCE STATIC GENERATION
===================================================== */
export const dynamic = "force-static"

/* =====================================================
   SEO METADATA
===================================================== */
export const metadata: Metadata = {
    title: "Contact Us | India News Hindi",
    description:
        "Contact India News Hindi for news tips, inquiries, or collaborations. Visit our office in Dwarka Mor, Delhi or reach us via phone, email, or WhatsApp.",

    alternates: {
        canonical: "https://indianewshindi.com/contact"
    },

    robots: {
        index: true,
        follow: true
    },

    openGraph: {
        title: "Contact India News Hindi",
        description:
            "Reach India News Hindi via phone, email, WhatsApp, or visit our office in Delhi.",
        url: "https://indianewshindi.com/contact",
        siteName: "India News Hindi",
        type: "website",
        images: [
            {
                url: "https://indianewshindi.com/icon2.png",
                width: 1200,
                height: 630,
                alt: "Contact India News Hindi"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact India News Hindi",
        description:
            "Get in touch with India News Hindi newsroom and editorial team.",
        images: ["https://indianewshindi.com/icon2.png"]
    }
}

/* =====================================================
   PAGE
===================================================== */
export default function ContactPage() {

    /* =====================================================
       LOCAL BUSINESS + CONTACT SCHEMA
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

        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9499475282",
            contactType: "customer support",
            email: "officialindianewshindi2026@gmail.com",
            areaServed: "IN",
            availableLanguage: ["Hindi", "English"]
        },

        address: {
            "@type": "PostalAddress",
            streetAddress: "Dwarka Mor, Vipin Garden",
            addressLocality: "New Delhi",
            postalCode: "110059",
            addressCountry: "India"
        }
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
                name: "Contact",
                item: "https://indianewshindi.com/contact"
            }
        ]
    }

    return (
        <>
            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen font-display">
                {/* Hero Section */}
                <section className="bg-[#321a1a] text-white py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Have a story to share, a question to ask, or just want to say hello?
                            We&apos;re here and ready to connect with you.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-20">
                    {/* Contact Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Phone Card */}
                        <a
                            href="tel:+919499475282"
                            className="group bg-white dark:bg-neutral-800 p-10 rounded-[2.5rem] shadow-xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-6 group-hover:rotate-0">
                                <Phone size={36} />
                            </div>
                            <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Speak with Us</h3>
                            <p className="text-2xl font-black text-neutral-dark dark:text-white group-hover:text-primary transition-colors">+91 9499475282</p>
                            <p className="mt-4 text-neutral-400 text-sm">Mon-Sat | 10am - 6pm</p>
                        </a>

                        {/* Email Card */}
                        <a
                            href="mailto:officialindianewshindi2026@gmail.com"
                            className="group bg-white dark:bg-neutral-800 p-10 rounded-[2.5rem] shadow-xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 -rotate-6 group-hover:rotate-0">
                                <Mail size={36} />
                            </div>
                            <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Email Us</h3>
                            <p className="text-xl font-black text-neutral-dark dark:text-white group-hover:text-blue-500 transition-colors break-all">officialindianewshindi2026@gmail.com</p>
                            <p className="mt-4 text-neutral-400 text-sm">We reply within 24 hours</p>
                        </a>

                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/919499475282"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white dark:bg-neutral-800 p-10 rounded-[2.5rem] shadow-xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-green-500/10 text-green-500 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 rotate-12 group-hover:rotate-0">
                                <MessageCircle size={36} />
                            </div>
                            <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">WhatsApp</h3>
                            <p className="text-2xl font-black text-neutral-dark dark:text-white group-hover:text-green-500 transition-colors">Instant Chat</p>
                            <p className="mt-4 text-neutral-400 text-sm">Better for news tips</p>
                        </a>
                    </div>

                    {/* Map & Location Section */}
                    <div className="bg-white dark:bg-neutral-800 rounded-[3rem] p-4 shadow-xl border border-black/5 dark:border-white/5 overflow-hidden group">
                        <div className="grid lg:grid-cols-12 gap-4">
                            <div className="lg:col-span-8 h-[500px] relative rounded-[2.5rem] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2175055311286!2d77.02312497376359!3d28.623242580750656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0541588a57f5%3A0xe9e51d49f8b48d55!2sDwarka%20Mor%2C%20Vipin%20Garden%2C%20Nawada%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1770801689301!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                                ></iframe>
                            </div>

                            <div className="lg:col-span-4 p-8 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                                    <MapPin size={14} className="text-primary" />
                                    Visit Our Office
                                </div>
                                <h2 className="text-3xl font-black text-neutral-dark dark:text-white mb-6 leading-tight">
                                    Located at the <br /> Heart of West Delhi
                                </h2>
                                <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                                    Our editorial office is situated at Dwarka Mor, accessible via the Blue Line of the Delhi Metro.
                                </p>
                                <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-3xl border border-black/5 dark:border-white/5 mb-8">
                                    <p className="font-bold text-neutral-dark dark:text-white">India News Hindi</p>
                                    <p className="text-neutral-500">Dwarka Mor, Vipin Garden</p>
                                    <p className="text-neutral-500">New Delhi, 110059</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

import type { Metadata } from "next";
import { Work_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-tiro-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indianewshindi.com"),
  title: {
    default: "India News Hindi - Latest Hindi News, Breaking News in Hindi",
    template: "%s | India News Hindi",
  },
  icons: {
    icon: [
      { url: "/icon1.png", sizes: "192x192", type: "image/png" },
      { url: "/icon2.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon1.png",
  },
  alternates: {
    canonical: "https://indianewshindi.com",
  },
  description: "Read the latest news in Hindi from India and around the world. Get breaking news updates on politics, sports, entertainment, technology, and more on India News Hindi.",
  keywords: ["Hindi News", "India News", "Latest News in Hindi", "Breaking News Hindi", "Today News Hindi"],
  authors: [{ name: "India News Hindi" }],
  creator: "India News Hindi",
  publisher: "India News Hindi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "India News Hindi - Latest Hindi News, Breaking News in Hindi",
    description: "Read the latest news in Hindi from India and around the world. Get breaking news updates on politics, sports, entertainment, technology, and more.",
    url: "https://indianewshindi.com",
    siteName: "India News Hindi",
    locale: "hi_IN",
    type: "website",
    images: ["https://indianewshindi.com/icon2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "India News Hindi - Latest Hindi News",
    description: "Read the latest news in Hindi from India and around the world.",
    creator: "@indianewshindi_",
    site: "@indianewshindi_",
    images: ["https://indianewshindi.com/icon2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "India News",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Placeholder
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "India News Hindi",
  "url": "https://indianewshindi.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://indianewshindi.com/icon2.png", // Ensure this exists or use actual logo path
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://x.com/indianewshindi_",
    "https://www.youtube.com/@indianewshindiofficial",
  ]
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3294018561004411" crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-0FNM3993LW" />
      </head>
      <body
        className={`${workSans.variable} ${tiroDevanagari.variable} antialiased font-display bg-background-light dark:bg-background-dark text-neutral-dark dark:text-background-light`}
      >
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />

        {/* Google Translate anchor (must exist once globally) */}
        <div id="google_translate_element" className="hidden" />

        {/* Floating language switcher */}
        <LanguageSwitcher />
      </body>
    </html>
  );
}

import { Metadata } from "next"
import { notFound } from "next/navigation"

import AuthorView from "./AuthorView"
import { fetchAuthorDetails } from "@/services/api"
import { getAbsoluteImageUrl } from "@/lib/utils"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

/* =====================================================
   METADATA (Dynamic Author SEO)
===================================================== */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

    const { slug } = await params
    const author = await fetchAuthorDetails(slug)

    if (!author) return { title: "Author Not Found" }

    const image = author.profile_image
        ? getAbsoluteImageUrl(author.profile_image)
        : "https://indianewshindi.com/icon2.png"

    const url = `https://indianewshindi.com/author/${slug}`

    return {
        title: `${author.first_name} | India News Hindi`,
        description: author.bio || `Read articles written by ${author.first_name} on India News Hindi`,
        alternates: { canonical: url },
        robots: { index: true, follow: true },

        openGraph: {
            title: `${author.first_name} | India News Hindi`,
            description: author.bio || `Read articles written by ${author.first_name} on India News Hindi`,
            url,
            siteName: "India News Hindi",
            type: "profile",
            images: [
                {
                    url: image,
                    width: 512,
                    height: 512,
                    alt: author.first_name
                }
            ]
        },

        twitter: {
            card: "summary_large_image",
            title: `${author.first_name} | India News Hindi`,
            description: author.bio || `Read articles written by ${author.first_name} on India News Hindi`,
            images: [image]
        }
    }
}

/* =====================================================
   PAGE (SSR + PERSON SCHEMA)
===================================================== */
export default async function Page({ params }: PageProps) {

    const { slug } = await params
    const author = await fetchAuthorDetails(slug)

    if (!author) notFound()

    const image = author.profile_image
        ? getAbsoluteImageUrl(author.profile_image)
        : "https://indianewshindi.com/icon2.png"

    const url = `https://indianewshindi.com/author/${slug}`

    /* =====================================================
       PERSON + PROFILE PAGE SCHEMA (VERY IMPORTANT)
    ===================================================== */
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",

        mainEntity: {
            "@type": "Person",
            name: author.first_name,
            description: author.bio || "Journalist at India News Hindi",
            image: image,
            url: url,
            jobTitle: "Journalist",

            sameAs: [
                author.twitter,
                author.linkedin,
                author.facebook,
                author.instagram,
                author.youtube,
                author.website
            ].filter(Boolean),

            worksFor: {
                "@type": "Organization",
                name: "India News Hindi",
                url: "https://indianewshindi.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://indianewshindi.com/icon2.png",
                    width: 512,
                    height: 512
                }
            }
        },

        inLanguage: "hi-IN"
    }

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Your UI */}
            <AuthorView author={author} />
        </>
    )
}
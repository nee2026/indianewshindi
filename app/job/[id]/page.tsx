import { Metadata } from "next"
import { notFound } from "next/navigation"
import JobView from "./JobView"

import { fetchJobDetails } from "@/services/api"
import { toTitleCase } from "@/lib/utils"

interface PageProps {
    params: Promise<{ id: string }>
    searchParams?: Promise<{ p?: string }>
}

/* =====================================================
   METADATA (Dynamic Job SEO)
===================================================== */
export async function generateMetadata(
    { params, searchParams }: PageProps
): Promise<Metadata> {

    const { id } = await params
    const query = await searchParams
    const pageNum = Number(query?.p || 1)
    const job = await fetchJobDetails(id, pageNum)

    if (!job) return { title: "Job Not Found" }

    const title = `${toTitleCase(job.job_title)} | Jobs in ${job.city_display}`
    const description =
        job.front_description ||
        `Apply for ${job.job_title} job in ${job.city_display}. Salary ₹${job.salary_min || ""} - ₹${job.salary_max || ""}`

    const url = `https://indianewshindi.com/job/${id}`

    return {
        title,
        description,
        alternates: { canonical: url },
        robots: { index: true, follow: true },

        openGraph: {
            title,
            description,
            url,
            siteName: "India News Hindi",
            type: "article",
            images: [
                {
                    url: "https://indianewshindi.com/icon2.png",
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://indianewshindi.com/icon2.png"]
        }
    }
}

/* =====================================================
   PAGE (SSR + GOOGLE JOBS STRUCTURED DATA)
===================================================== */
export default async function Page({ params, searchParams }: PageProps) {

    const { id } = await params
    const query = await searchParams
    const pageNum = Number(query?.p || 1)

    const job = await fetchJobDetails(id, pageNum)
    if (!job) notFound()

    const jobUrl = `https://indianewshindi.com/job/${id}`

    /* =====================================================
       GOOGLE JOB POSTING STRUCTURED DATA
    ===================================================== */
    const jobSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",

        title: job.job_title,

        description: job.job_description,

        datePosted: job.created_at,
        validThrough: job.expire_date || undefined,

        employmentType: job.job_type_display,
        jobLocationType: "ON_SITE",

        hiringOrganization: {
            "@type": "Organization",
            name: job.posted_by || "Hiring Company",
            sameAs: "https://indianewshindi.com"
        },

        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: job.city_display,
                addressRegion: job.state_display,
                postalCode: job.pincode,
                addressCountry: job.country_display
            }
        },

        applicantLocationRequirements: {
            "@type": "Country",
            name: job.country_display || "India"
        },

        baseSalary: job.salary_min && job.salary_max ? {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
                "@type": "QuantitativeValue",
                minValue: job.salary_min,
                maxValue: job.salary_max,
                unitText: "MONTH"
            }
        } : undefined,

        qualifications: job.minimum_qualification,
        experienceRequirements: job.total_experience,
        workHours: job.job_timings,

        identifier: {
            "@type": "PropertyValue",
            name: "India News Hindi",
            value: job.id
        },

        directApply: true
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
                name: "Jobs",
                item: "https://indianewshindi.com/category/job"
            },
            {
                "@type": "ListItem",
                position: 3,
                name: job.job_title,
                item: jobUrl
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <JobView job={job} pageNum={pageNum} />
        </>
    )
}
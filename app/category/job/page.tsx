import { Metadata } from "next"
import JobsView from "./JobsView"
import { fetchJobs } from "@/services/api"

interface PageProps {
  searchParams?: Promise<{ page?: string }>
}

/* =====================================================
   METADATA (Dynamic Pagination Canonical SEO)
===================================================== */
export async function generateMetadata({
  searchParams
}: PageProps): Promise<Metadata> {

  const params = await searchParams
  const page = Number(params?.page || 1)

  const baseUrl = "https://indianewshindi.com/category/job"

  const url =
    page === 1
      ? baseUrl
      : `${baseUrl}?page=${page}`

  const title =
    page === 1
      ? "Latest Jobs in India | India News Hindi"
      : `Latest Jobs in India - Page ${page} | India News Hindi`

  const description =
    "Browse the latest government and private job openings across India."

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
      type: "website",
      images: [
        {
          url: "https://indianewshindi.com/icon2.png",
          width: 1200,
          height: 630,
          alt: "Latest Jobs"
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
   PAGE (SSR + Google Jobs Structured Data)
===================================================== */
export default async function Page({ searchParams }: PageProps) {

  const params = await searchParams
  const currentPage = Number(params?.page || 1)

  const data = await fetchJobs(currentPage)

  const jobs = data?.results || []
  const totalCount = data?.count || 0

  const baseUrl = "https://indianewshindi.com/category/job"
  const pageUrl =
    currentPage === 1
      ? baseUrl
      : `${baseUrl}?page=${currentPage}`

  /* =====================================================
     JOB LIST SCHEMA (ItemList + JobPosting)
     BEST PRACTICE FOR GOOGLE JOBS
  ===================================================== */
  const jobsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Jobs",
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, index) => ({

      "@type": "ListItem",
      position: index + 1,

      item: {
        "@type": "JobPosting",

        title: job.job_title,

        description:
          job.job_description ||
          job.additional_info ||
          `Apply for ${job.job_title} in ${job.city_display}`,

        datePosted: job.created_at,

        employmentType: job.job_type_display,

        hiringOrganization: {
          "@type": "Organization",
          name: "Hiring Company",
          sameAs: "https://indianewshindi.com"
        },

        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: job.address || undefined,
            addressLocality: job.city_display,
            addressRegion: job.state_display,
            postalCode: job.pincode || undefined,
            addressCountry: job.country_display || "India"
          }
        },

        baseSalary:
          job.salary_min && job.salary_max
            ? {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                  "@type": "QuantitativeValue",
                  minValue: job.salary_min,
                  maxValue: job.salary_max,
                  unitText: "MONTH"
                }
              }
            : undefined,

        qualifications: job.minimum_qualification || undefined,
        experienceRequirements: job.total_experience || undefined,
        workHours: job.job_timings || undefined,

        applicantLocationRequirements: {
          "@type": "Country",
          name: job.country_display || "India"
        },

        industry: job.job_category_display || undefined,

        identifier: {
          "@type": "PropertyValue",
          name: "India News Hindi Jobs",
          value: job.id
        }
      }
    }))
  }

  /* =====================================================
     COLLECTION PAGE + BREADCRUMB SCHEMA
  ===================================================== */
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Latest Jobs",
    url: pageUrl,
    inLanguage: "hi-IN",

    breadcrumb: {
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
          item: baseUrl
        }
      ]
    }
  }

  return (
    <>
      {/* Collection page schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Jobs list schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsSchema) }}
      />

      <JobsView
        initialJobs={jobs}
        initialPage={currentPage}
        totalCount={totalCount}
      />
    </>
  )
}
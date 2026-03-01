"use client"

import Link from "next/link"
import { Briefcase, Building, ChevronRight, Clock, GraduationCap, IndianRupee, MapPin, Navigation, Users } from "lucide-react"
import { HirexJob } from "@/types"
import { formatDate, generateJobWhatsAppLink, toTitleCase } from "@/lib/utils"

interface Props {
    job: HirexJob
    pageNum: number
}

export default function JobView({ job, pageNum }: Props) {

    const salaryText =
        job.salary_min && job.salary_max
            ? `₹${job.salary_min.toLocaleString()} - ₹${job.salary_max.toLocaleString()} / mo`
            : "Salary not disclosed"

    return (
        <main className="min-h-screen bg-background-light dark:bg-neutral-dark py-8 px-4 font-display">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center text-sm text-neutral-500 mb-8 capitalize">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <Link href="/category/job" className="hover:text-primary">Jobs</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-neutral-900 dark:text-white font-medium truncate max-w-[200px] md:max-w-xs">{toTitleCase(job.job_title)}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 flex flex-col gap-8">

                        {/* Header Section */}
                        <section className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-soft relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                                        {job.job_type_display}
                                    </span>
                                    <span className="text-xs font-bold px-3 py-1 bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 rounded-full uppercase tracking-wider">
                                        {job.job_category_display.split('(')[0].trim()}
                                    </span>
                                    {job.expire_date && (
                                        <span className="text-xs font-bold text-red-500 bg-red-50 dark:bg-red-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                                            <Clock size={12} />
                                            Apply Before: {formatDate(job.expire_date)}
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-neutral-dark dark:text-white mb-4 leading-tight">
                                    {toTitleCase(job.job_title)}
                                </h1>

                                <div className="flex items-center gap-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-medium mb-8">

                                    <Building className="text-primary shrink-0" size={24} />

                                    {job.posted_by || "Hiring Company"}
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Salary</p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-dark dark:text-white">
                                            <IndianRupee size={16} className="text-green-600" />
                                            {salaryText}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Experience</p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-dark dark:text-white whitespace-nowrap">
                                            <Briefcase size={16} className="text-blue-600" />
                                            {job.total_experience || 'Not Specified'}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Location</p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-dark dark:text-white">
                                            <MapPin size={16} className="text-orange-600" />
                                            <span className="truncate">
                                                {job.city_display?.split(",")?.[0] ?? "Location not specified"}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Openings</p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-dark dark:text-white">
                                            <Users size={16} className="text-purple-600" />
                                            {job.number_of_openings} Vacanc{job.number_of_openings > 1 ? 'ies' : 'y'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Description Sections */}
                        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-soft prose prose-lg dark:prose-invert max-w-none">
                            {job.job_description && (
                                <div className="mb-10">
                                    <div dangerouslySetInnerHTML={{ __html: job.job_description }} />
                                </div>
                            )}

                            {job.skills && (
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold mb-4">Required Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.split('  ').filter(Boolean).map((skill, idx) => (
                                            <span key={idx} className="bg-neutral-100 dark:bg-white/10 text-neutral-dark dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-black/5 dark:border-white/5">
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {job.additional_info && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: job.additional_info }} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar / Apply Section */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 border border-black/5 dark:border-white/5 shadow-soft sticky top-24">
                            <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                Job Details
                            </h3>

                            <ul className="space-y-4 mb-8 text-sm">
                                <li className="flex gap-3">
                                    <GraduationCap className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-0.5">Qualification</p>
                                        <p className="font-semibold text-neutral-dark dark:text-white">{job.minimum_qualification || 'Any'}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-0.5">Job Timings</p>
                                        <p className="font-semibold text-neutral-dark dark:text-white">{job.job_timings || 'Not Specified'}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Navigation className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-0.5">Interview Timings</p>
                                        <p className="font-semibold text-neutral-dark dark:text-white">{job.interview_timings || 'Not Specified'}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Users className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-0.5">Gender Preference</p>
                                        <p className="font-semibold text-neutral-dark dark:text-white capitalize">{job.gender_preference || 'Any'}</p>
                                    </div>
                                </li>
                            </ul>

                            <hr className="border-black/5 dark:border-white/5 mb-6" />

                            <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-900 dark:text-white mb-4">Contact Information</h4>
                            <div className="bg-neutral-50 dark:bg-white/5 p-4 rounded-xl space-y-3 mb-6 border border-black/5 dark:border-white/5">
                                <p className="text-sm">
                                    <span className="text-neutral-500 font-medium">HR Name:</span><br />
                                    <span className="font-bold text-neutral-dark dark:text-white">{job.contact_person_name || 'Not Disclosed'}</span>
                                </p>
                                {job.phone_number && (
                                    <p className="text-sm">
                                        <span className="text-neutral-500 font-medium">Contact:</span><br />
                                        <span className="font-bold text-neutral-dark dark:text-white">{job.phone_number}</span>
                                    </p>
                                )}
                                {job.email && (
                                    <p className="text-sm">
                                        <span className="text-neutral-500 font-medium">Email:</span><br />
                                        <a href={`mailto:${job.email}`} className="font-bold text-primary hover:underline">{job.email}</a>
                                    </p>
                                )}
                            </div>

                            <a
                                href={generateJobWhatsAppLink(job, pageNum)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-transform active:scale-95 shadow-md flex items-center justify-center gap-2"
                            >
                                Apply Now
                            </a>
                            <p className="text-center text-xs text-neutral-400 mt-4 leading-relaxed">
                                Please mention India News Hindi when applying for this job.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
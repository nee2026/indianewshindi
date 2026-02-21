"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <main className="bg-neutral-50 dark:bg-neutral-900 min-h-screen">
            {/* Header */}
            <section className="bg-[#321a1a] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Contact Us</h1>
                    <p className="text-white/80 text-lg">We&apos;d love to hear from you. Get in touch with us.</p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-700">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <MessageSquare size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">Send a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">Your Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">Write your message...</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-[#321a1a] text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                            <h2 className="text-3xl font-bold mb-8 relative z-10">Reach Us</h2>

                            <div className="space-y-8 relative z-10">
                                <a href="tel:+919499475282" className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-xl transition-all -mx-2">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors border border-white/10 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                                        <p className="text-xl font-bold">+91 9499475282</p>
                                    </div>
                                </a>

                                <a href="mailto:officialindianewshindi2026@gmail.com" className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-xl transition-all -mx-2">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors border border-white/10 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-lg md:text-xl font-bold break-all">officialindianewshindi2026@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors border border-white/10 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                                        <p className="text-xl font-bold leading-snug">Dwarka Mor, Delhi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder or Additional Content */}
                        <div className="bg-white dark:bg-neutral-800 p-2 rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-700 h-64 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400">
                                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                                    <MapPin size={16} />
                                    Dwarka Mor, Delhi
                                </span>
                            </div>
                            {/* This would be an iframe for Google Maps */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2175055311286!2d77.02312497376359!3d28.623242580750656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0541588a57f5%3A0xe9e51d49f8b48d55!2sDwarka%20Mor%2C%20Vipin%20Garden%2C%20Nawada%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1770801689301!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                            ></iframe>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

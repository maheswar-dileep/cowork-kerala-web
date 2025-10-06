import Image from 'next/image';
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactForm = () => {
    return (
        <section className="grid gap-8 md:grid-cols-5 md:gap-12">
            {/* Left Side - Background with Contact Info */}
            <div className="md:col-span-3 relative overflow-hidden rounded-3xl">
                <div className="relative h-96 w-full md:h-full">
                    <Image
                        src="/images/hero-banner/people-coworking.png"
                        alt="Modern office with city skyline"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary-300/80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        Fill out the form, and we`ll get back to you soon.
                    </h2>

                    <p className="mb-8 text-lg">Or reach us directly:</p>

                    <div className="space-y-4">
                        <button className="flex items-center gap-3 rounded-full bg-black/20 px-6 py-3 text-primary-100 hover:bg-black/30 transition-colors">
                            <Phone className="h-5 w-5" />
                            <span>+123 45 654 98</span>
                        </button>

                        <button className="flex items-center gap-3 rounded-full bg-black/20 px-6 py-3 text-primary-100 hover:bg-black/30 transition-colors">
                            <Mail className="h-5 w-5" />
                            <span>cowrkspace@email.com</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="md:col-span-2">
                <div className="rounded-3xl bg-primary-50/60 p-8">
                    <form className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Jane Smith"
                                    className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    PHONE
                                </label>
                                <input
                                    type="tel"
                                    defaultValue="0123 456 789"
                                    className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                defaultValue="jane@framer.com"
                                className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none"
                            />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    SPACE TYPE
                                </label>
                                <select className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none">
                                    <option>Select Spaces...</option>
                                    <option>Hot Desk</option>
                                    <option>Dedicated Desk</option>
                                    <option>Private Office</option>
                                    <option>Meeting Room</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    NUMBER OF SEATS
                                </label>
                                <input
                                    type="number"
                                    defaultValue="1"
                                    className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                LOCATION
                            </label>
                            <select className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none">
                                <option>Select...</option>
                                <option>Kochi</option>
                                <option>Trivandrum</option>
                                <option>Calicut</option>
                                <option>Thrissur</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                MESSAGE
                            </label>
                            <textarea
                                placeholder="Write your message"
                                rows={4}
                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-primary-300 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-12 w-full rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

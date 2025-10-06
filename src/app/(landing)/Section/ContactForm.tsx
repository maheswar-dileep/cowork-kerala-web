import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-primary-50/60">
            {/* Background wavy pattern */}
            <div className="absolute inset-0 opacity-20">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 1440 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,10 Q25,0 50,10 T100,10"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-primary-200"
                    />
                    <path
                        d="M0,15 Q25,5 50,15 T100,15"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-primary-200"
                    />
                </svg>
            </div>

            <div className="relative grid gap-8 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-7 p-6 md:p-8">
                    <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                        Let us find your perfect Property
                    </h2>
                    <p className="mt-2 text-gray-700">Connect to a Cowork Expert now</p>

                    <form className="mt-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 placeholder:text-gray-500 focus:border-primary-300 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 placeholder:text-gray-500 focus:border-primary-300 focus:outline-none"
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <select className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none">
                                <option>Type of Space</option>
                                <option>Hot Desk</option>
                                <option>Dedicated Desk</option>
                                <option>Private Office</option>
                                <option>Meeting Room</option>
                            </select>
                            <div className="flex gap-2">
                                <select className="h-12 w-20 rounded-lg border border-gray-200 bg-white px-2 text-gray-900 focus:border-primary-300 focus:outline-none">
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Phone*"
                                    className="h-12 flex-1 rounded-lg border border-gray-200 bg-white px-4 text-gray-900 placeholder:text-gray-500 focus:border-primary-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <select className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-gray-900 focus:border-primary-300 focus:outline-none">
                            <option>Select City*</option>
                            <option>Kochi</option>
                            <option>Trivandrum</option>
                            <option>Calicut</option>
                            <option>Thrissur</option>
                        </select>

                        <button
                            type="submit"
                            className="h-12 w-full rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="md:col-span-5 flex items-center justify-center p-6 md:p-8">
                    <div className="relative h-80 w-80 md:h-96 md:w-96">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <Image
                                src="/images/hero-banner/people-coworking.png"
                                alt="People working in a modern workspace"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

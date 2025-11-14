import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <section className="relative overflow-hidden bg-[#D7F5B1]/40">
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

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
                <div className="md:col-span-7">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
                        Let us find your perfect Property
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8">Connect to a Cowork Expert now</p>

                    <form className="space-y-3 md:space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="h-11 md:h-12 w-full rounded-lg border border-gray-200 bg-white px-3 md:px-4 text-sm md:text-base text-gray-900 placeholder:text-gray-500 focus:border-primary-300 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className="h-11 md:h-12 w-full rounded-lg border border-gray-200 bg-white px-3 md:px-4 text-sm md:text-base text-gray-900 placeholder:text-gray-500 focus:border-primary-300 focus:outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <select className="h-11 md:h-12 w-full rounded-lg border border-gray-200 bg-white px-3 md:px-4 text-sm md:text-base text-gray-900 focus:border-primary-300 focus:outline-none">
                                <option>Type of Space</option>
                                <option>Hot Desk</option>
                                <option>Dedicated Desk</option>
                                <option>Private Office</option>
                                <option>Meeting Room</option>
                            </select>
                            <div className="flex gap-2">
                                <select className="h-11 md:h-12 w-16 md:w-20 rounded-lg border border-gray-200 bg-white px-1 md:px-2 text-sm md:text-base text-gray-900 focus:border-primary-300 focus:outline-none">
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Phone*"
                                    className="h-11 md:h-12 flex-1 rounded-lg border border-gray-200 bg-white px-3 md:px-4 text-sm md:text-base text-gray-900 placeholder:text-gray-500 focus:border-primary-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <select className="h-11 md:h-12 w-full rounded-lg border border-gray-200 bg-white px-3 md:px-4 text-sm md:text-base text-gray-900 focus:border-primary-300 focus:outline-none">
                            <option>Select City*</option>
                            <option>Kochi</option>
                            <option>Trivandrum</option>
                            <option>Calicut</option>
                            <option>Thrissur</option>
                        </select>

                        <button
                            type="submit"
                            className="h-11 md:h-12 w-full rounded-lg bg-zinc-900 text-white text-sm md:text-base font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="md:col-span-5 hidden md:flex items-center justify-center">
                    <div className="relative h-64 w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <Image
                                src="/images/hero-banner/people-coworking.png"
                                alt="People working in a modern workspace"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

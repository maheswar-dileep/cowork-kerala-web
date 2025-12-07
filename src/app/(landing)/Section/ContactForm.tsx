import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <section className="relative overflow-hidden bg-primary-100 py-12 md:py-16 lg:py-20">
            {/* Background wavy pattern */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <Image
                    src="/images/landing/Group.svg"
                    alt="Background pattern"
                    fill
                    className="object-cover opacity-40"
                />
            </div>

            <div className="relative mx-auto px-8 md:px-[15%]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 mb-2">
                            Let us find your perfect Property
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-8">
                            Connect to a Cowork Expert now
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    className="h-12 w-full rounded-xl border-none bg-white px-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-primary-400 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="h-12 w-full rounded-xl border-none bg-white px-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-primary-400 focus:outline-none"
                                />
                                <div className="flex gap-2">

                                    <input
                                        type="tel"
                                        placeholder="Phone*"
                                        className="h-12 flex-1 rounded-xl border-none bg-white px-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-primary-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <select className="h-12 w-full appearance-none rounded-xl border-none bg-white px-4 text-zinc-900 focus:ring-2 focus:ring-primary-400 focus:outline-none">
                                        <option>Type of Space</option>
                                        <option>Hot Desk</option>
                                        <option>Dedicated Desk</option>
                                        <option>Private Office</option>
                                        <option>Meeting Room</option>
                                    </select>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
                                        ▼
                                    </span>
                                </div>
                                <div className="relative">
                                    <select className="h-12 w-full appearance-none rounded-xl border-none bg-white px-4 text-zinc-900 focus:ring-2 focus:ring-primary-400 focus:outline-none">
                                        <option>Select City*</option>
                                        <option>Kochi</option>
                                        <option>Trivandrum</option>
                                        <option>Calicut</option>
                                        <option>Thrissur</option>
                                    </select>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
                                        ▼
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="h-12 w-full rounded-xl bg-[#4d898b] text-white font-medium hover:bg-[#3b6874] transition-colors shadow-sm"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-4 hidden md:flex justify-center lg:justify-end">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white overflow-hidden shadow-lg">
                            <Image
                                src="/images/landing/cta.png"
                                alt="Coworking expert"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

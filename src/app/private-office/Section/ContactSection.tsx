'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { getLocations, Location } from '@/services/locations';

const ContactSection = () => {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const data = await getLocations();
                if (data) {
                    setLocations(data);
                }
            } catch (error) {
                console.error('Failed to fetch locations', error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <section className="w-full px-6 md:px-12 mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Left: Image with Overlay */}
                <div className="relative h-[500px] lg:h-auto rounded-3xl overflow-hidden group">
                    <Image
                        src="/images/private-office/cta-1.png"
                        alt="Contact us"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 mix-blend-multiply"
                        style={{
                            background: 'linear-gradient(180deg, #D7F09C 0%, #0C2E16 67.57%)',
                        }}
                    />

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight max-w-lg">
                            <span className="text-primary-100">Fill out the form, and</span>{' '}
                            we&apos;ll get back to you soon.
                        </h2>

                        <div className="space-y-4">
                            <p className="text-[#D4E7A6] text-sm font-medium uppercase tracking-wider mb-2">
                                Or reach us directly:
                            </p>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-xl border border-primary-100 flex items-center justify-center text-primary-100 backdrop-blur-sm">
                                    <Phone size={18} />
                                </div>
                                <span className="text-xl md:text-2xl font-light tracking-wide">
                                    +123 45 654 98
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-xl border border-primary-100 flex items-center justify-center text-primary-100 backdrop-blur-sm">
                                    <Mail size={18} />
                                </div>
                                <span className="text-xl md:text-2xl font-light tracking-wide">
                                    cowrkspace@email.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-[#D4E7A6] rounded-3xl p-8 md:p-12">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jane Smith"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="0123 456 789"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="jane@framer.com"
                                className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm placeholder:text-gray-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                    Space Type
                                </label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm appearance-none text-gray-600">
                                        <option>Select Spaces...</option>
                                        <option>Private Office</option>
                                        <option>Virtual Office</option>
                                        <option>Meeting Room</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L5 5L9 1"
                                                stroke="#9CA3AF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                    Number of Seats
                                </label>
                                <input
                                    type="number"
                                    placeholder="1"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Location
                            </label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm appearance-none text-gray-600">
                                    <option>Select...</option>
                                    {locations.map((loc) => (
                                        <option key={loc.id || loc.name} value={loc.name}>
                                            {loc.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L5 5L9 1"
                                            stroke="#9CA3AF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Write your message"
                                className="w-full px-4 py-3 rounded-lg bg-white border-none focus:ring-2 focus:ring-[#1A2818]/20 outline-none text-sm placeholder:text-gray-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#4d898b] hover:bg-[#3b6874] text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-sm mt-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

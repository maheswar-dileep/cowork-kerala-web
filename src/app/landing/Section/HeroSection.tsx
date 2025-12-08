'use client';

import { getLocations, Location } from '@/services/locations';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

type Props = {
    locations: Location[];
};

const HeroSection = ({ locations }: Props) => {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
                        We help you find your ideal workspace in kerala
                    </h1>
                    <p className="text-zinc-600 leading-relaxed max-w-xl">
                        Discover premium coworking spaces and virtual offices across Kerala. From
                        Kochi to Trivandrum, find workspaces that suit your needs. Calicut, Thrissur
                        and more.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                            <MapPin size={18} />
                        </div>
                        <select className="w-full h-12 pl-10 pr-4 rounded-xl bg-primary-50 border-none text-zinc-700 outline-none appearance-none cursor-pointer">
                            <option>Building Type</option>
                            <option>Private Office</option>
                            <option>Coworking</option>
                        </select>
                    </div>
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                            <MapPin size={18} />
                        </div>
                        <select className="w-full h-12 pl-10 pr-4 rounded-xl bg-primary-50 border-none text-zinc-700 outline-none appearance-none cursor-pointer">
                            <option>Location</option>
                            <option>Kochi</option>
                            <option>Trivandrum</option>
                        </select>
                    </div>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-5 gap-4 max-w-lg">
                    {locations.map((loc, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 group cursor-pointer"
                        >
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary-500 transition-all">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-[10px] font-medium text-zinc-600 text-center">
                                {loc.name}
                            </span>
                        </div>
                    ))}
                </div>

                <button className="w-fit bg-[#2f1500] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">
                    EXPLORE WORKSPACES
                </button>
            </div>

            {/* Right Images Collage */}
            <div className="relative h-[600px] hidden lg:block">
                <div className="absolute top-0 right-0 w-3/4 h-1/2 rounded-[40px] overflow-hidden">
                    <Image
                        src="/images/glimpse/open-office.png"
                        alt="Office"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-3/4 h-2/5 rounded-[40px] overflow-hidden">
                    <Image
                        src="/images/glimpse/group-discussion.png"
                        alt="Meeting"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

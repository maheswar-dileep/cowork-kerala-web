import Image from 'next/image';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroCTA = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl">
            {/* Background Image with Dark Overlay */}
            <div className="relative h-96 w-full md:h-[500px]">
                <Image
                    src="/images/hero-banner/people-coworking.png"
                    alt="Modern coworking space with warm lighting"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h2 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
                    Welcome a new way of
                    <br />
                    productivity & collaboration
                </h2>

                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <button className="rounded-full bg-primary-100 px-8 py-3 text-lg font-semibold text-gray-900 hover:bg-primary-200 transition-colors">
                        BOOK A SPACE
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-gray-900 hover:bg-primary-200 transition-colors">
                        <ArrowUpRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroCTA;

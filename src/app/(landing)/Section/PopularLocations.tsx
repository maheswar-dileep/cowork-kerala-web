import Image from 'next/image';
import React from 'react';

type Location = {
    id: string;
    name: string;
    image: string;
};

const LOCATIONS: Location[] = [
    { id: 'thrissur', name: 'Thrissur', image: '/images/thumb-1.jpg' },
    { id: 'kozhikode', name: 'Kozhikode', image: '/images/thumb-2.png' },
    { id: 'kochi', name: 'Kochi', image: '/images/hero-banner/b1.png' },
    { id: 'trivandrum', name: 'Trivandrum', image: '/images/hero-banner/people-coworking.png' },
];

const PopularLocations = () => {
    return (
        <section className="w-full py-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 mb-3">
                    Popular Locations in Kerala
                </h2>
                <p className="text-sm md:text-base text-zinc-700 tracking-wide uppercase">
                    EXPLORE COWORKING SPACES AND VIRTUAL OFFICES IN KERALA&apos;S MAJOR BUSINESS HUBS
                </p>
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
                {LOCATIONS.map((loc) => (
                    <div key={loc.id} className="flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl mb-4">
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-zinc-900">
                            {loc.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mb-8">
                {[0, 1, 2, 3].map((i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all ${
                            i === 1
                                ? 'w-8 h-2 bg-zinc-800'
                                : 'w-2 h-2 bg-zinc-400 hover:bg-zinc-500'
                        }`}
                    />
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <button className="px-6 py-3 rounded-full bg-[#CFEAB1] text-zinc-900 text-sm font-medium tracking-wide hover:bg-[#bfda9f] transition-colors">
                    DISCOVER MORE
                </button>
            </div>
        </section>
    );
};

export default PopularLocations;


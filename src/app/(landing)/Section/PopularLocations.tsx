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
        <section className="w-full py-8 md:py-12 lg:py-16">
            {/* Header */}
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 mb-2 md:mb-3">
                    Popular Locations in Kerala
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-zinc-700 tracking-wide uppercase px-4">
                    EXPLORE COWORKING SPACES AND VIRTUAL OFFICES IN KERALA&apos;S MAJOR BUSINESS HUBS
                </p>
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                {LOCATIONS.map((loc) => (
                    <div key={loc.id} className="flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl mb-3 md:mb-4">
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900">
                            {loc.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
                {[0, 1, 2, 3].map((i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all ${
                            i === 1
                                ? 'w-6 md:w-8 h-2 bg-zinc-800'
                                : 'w-2 h-2 bg-zinc-400 hover:bg-zinc-500'
                        }`}
                    />
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <button className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-[#CFEAB1] text-zinc-900 text-xs md:text-sm font-medium tracking-wide hover:bg-[#bfda9f] transition-colors">
                    DISCOVER MORE
                </button>
            </div>
        </section>
    );
};

export default PopularLocations;


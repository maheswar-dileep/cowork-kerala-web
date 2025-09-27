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
        <section className="rounded-3xl bg-primary-50/60 p-5 md:p-8">
            <div className="text-center">
                <h2 className="text-3xl font-semibold md:text-5xl">Popular Locations in Kerala</h2>
                <p className="mt-2 text-xs text-gray-700 md:text-sm">
                    Explore coworking spaces and virtual offices in Kerala{`'`}s major business hubs
                </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {LOCATIONS.map((loc) => (
                    <div key={loc.id} className="space-y-3">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="text-center text-base font-medium md:text-lg">
                            {loc.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
                {[0, 1, 2, 3].map((i) => (
                    <span
                        key={i}
                        className={`h-1.5 rounded-full ${
                            i === 1 ? 'w-8 bg-gray-900' : 'w-3 bg-gray-400'
                        }`}
                    />
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <button className="rounded-full bg-primary-100 px-5 py-2 text-gray-900 hover:bg-primary-200">
                    DISCOVER MORE
                </button>
            </div>
        </section>
    );
};

export default PopularLocations;


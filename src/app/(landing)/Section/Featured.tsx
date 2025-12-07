import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Wifi, Users, Ruler } from 'lucide-react';

type FeaturedItem = {
    id: string;
    title: string;
    image: string;
    wifi: string;
    seats: string;
    area: string;
    price: string;
};

const ITEMS: FeaturedItem[] = [
    {
        id: 'collab-hub-1',
        title: 'Collaborative Hub',
        image: '/images/thumb-1.jpg',
        wifi: '100 Mbps',
        seats: '50 Seats',
        area: '120 m²',
        price: '$120.00 / Day',
    },
    {
        id: 'open-ws-1',
        title: 'Open Workspace',
        image: '/images/thumb-2.png',
        wifi: '100 Mbps',
        seats: '30 Seats',
        area: '90 m²',
        price: '$85.00 / Day',
    },
    {
        id: 'private-1',
        title: 'Private Suite',
        image: '/images/thumb-1.jpg',
        wifi: '75 Mbps',
        seats: '10 Seats',
        area: '50 m²',
        price: '$45.00 / Day',
    },
    {
        id: 'collab-hub-2',
        title: 'Collaborative Hub',
        image: '/images/thumb-1.jpg',
        wifi: '100 Mbps',
        seats: '50 Seats',
        area: '120 m²',
        price: '$120.00 / Day',
    },
    {
        id: 'open-ws-2',
        title: 'Open Workspace',
        image: '/images/thumb-2.png',
        wifi: '100 Mbps',
        seats: '30 Seats',
        area: '90 m²',
        price: '$85.00 / Day',
    },
    {
        id: 'private-2',
        title: 'Private Suite',
        image: '/images/thumb-1.jpg',
        wifi: '75 Mbps',
        seats: '10 Seats',
        area: '50 m²',
        price: '$45.00 / Day',
    },
];

const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-[10px] sm:text-[11px] md:text-xs text-gray-900">
        {children}
    </span>
);

const FeaturedCard = ({ item }: { item: FeaturedItem }) => {
    return (
        <article className="space-y-2 md:space-y-3">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 w-full">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
                <Pill>
                    <Wifi size={12} className="md:w-3.5 md:h-3.5" /> {item.wifi}
                </Pill>
                <Pill>
                    <Users size={12} className="md:w-3.5 md:h-3.5" /> {item.seats}
                </Pill>
                <Pill>
                    <Ruler size={12} className="md:w-3.5 md:h-3.5" /> {item.area}
                </Pill>
            </div>
            <div className="mt-1 text-sm sm:text-base md:text-lg font-medium text-zinc-900">
                {item.title}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">{item.price}</div>
        </article>
    );
};

const Featured = () => {
    return (
        <section className="w-full py-8 md:py-12 lg:py-16">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 mb-2 md:mb-3">
                    Featured Workspaces in Kerala
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 uppercase tracking-wide">
                    Handpicked premium coworking spaces and virtual offices across God{`'`}s Own
                    Country
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
                {ITEMS.map((it) => (
                    <FeaturedCard key={it.id} item={it} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link
                    href="/workspace"
                    className="rounded-full bg-[#CFEAB1] px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium text-zinc-900 hover:bg-[#bfda9f] transition-colors tracking-wide"
                >
                    DISCOVER MORE
                </Link>
            </div>
        </section>
    );
};

export default Featured;

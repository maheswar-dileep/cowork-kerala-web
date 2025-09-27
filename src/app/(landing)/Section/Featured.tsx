import Image from 'next/image';
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
    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-[11px] text-gray-900 md:text-xs">
        {children}
    </span>
);

const FeaturedCard = ({ item }: { item: FeaturedItem }) => {
    return (
        <article className="space-y-2">
            <div className="relative overflow-hidden rounded-2xl">
                <div className="relative h-56 w-full md:h-60">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
                <Pill>
                    <Wifi size={14} /> {item.wifi}
                </Pill>
                <Pill>
                    <Users size={14} /> {item.seats}
                </Pill>
                <Pill>
                    <Ruler size={14} /> {item.area}
                </Pill>
            </div>
            <div className="mt-1 text-base font-medium md:text-lg">{item.title}</div>
            <div className="text-xs text-gray-600 md:text-sm">{item.price}</div>
        </article>
    );
};

const Featured = () => {
    return (
        <section className="space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-semibold md:text-5xl">
                    Featured Workspaces in Kerala
                </h2>
                <p className="mt-2 text-xs text-gray-700 md:text-sm">
                    Handpicked premium coworking spaces and virtual offices across God{`'`}s Own
                    Country
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {ITEMS.map((it) => (
                    <FeaturedCard key={it.id} item={it} />
                ))}
            </div>

            <div className="flex justify-center">
                <button className="rounded-full bg-primary-100 px-5 py-2 text-gray-900 hover:bg-primary-200">
                    DISCOVER MORE
                </button>
            </div>
        </section>
    );
};

export default Featured;

import React from 'react';
import Image from 'next/image';
import { MapPin, Users, Wifi } from 'lucide-react';

const workspaces = [
    {
        title: 'Collective Hive',
        location: 'Kochi, Kerala',
        image: '/images/glimpse/open-office.png',
        price: '₹4,500 / month',
        type: 'Hot Desk',
    },
    {
        title: 'Space Workspace',
        location: 'Trivandrum',
        image: '/images/glimpse/standing-desk.png',
        price: '₹6,000 / month',
        type: 'Dedicated',
    },
    {
        title: 'Private Suite',
        location: 'Calicut',
        image: '/images/glimpse/meeting-room.png',
        price: '₹12,000 / month',
        type: 'Private',
    },
    {
        title: 'Collaborative Hub',
        location: 'Kochi, Kerala',
        image: '/images/glimpse/office-floor.png',
        price: '₹5,000 / month',
        type: 'Hot Desk',
    },
    {
        title: 'Open Workspace',
        location: 'Thrissur',
        image: '/images/glimpse/group-discussion.png',
        price: '₹3,500 / month',
        type: 'Hot Desk',
    },
    {
        title: 'Private Studio',
        location: 'Kollam',
        image: '/images/glimpse/standing-desk.png',
        price: '₹8,000 / month',
        type: 'Private',
    },
];

const FeaturedSection = () => {
    return (
        <section className="w-full mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                    Featured Workspaces in Kerala
                </h2>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    Work in premium coworking spaces at affordable prices across Kerala
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workspaces.map((ws, index) => (
                    <div key={index} className="group flex flex-col gap-4">
                        <div className="relative w-full h-[250px] rounded-3xl overflow-hidden">
                            <Image
                                src={ws.image}
                                alt={ws.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-900">
                                {ws.type}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-zinc-900">{ws.title}</h3>
                                <span className="text-sm font-semibold text-primary-600">
                                    {ws.price}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                <MapPin size={14} />
                                <span>{ws.location}</span>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                                    <Wifi size={12} />
                                    <span>Fast Wifi</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                                    <Users size={12} />
                                    <span>Community</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-primary-100 text-zinc-900 px-8 py-3 rounded-full text-sm font-bold hover:bg-primary-200 transition-colors uppercase tracking-wider">
                    Show More
                </button>
            </div>
        </section>
    );
};

export default FeaturedSection;

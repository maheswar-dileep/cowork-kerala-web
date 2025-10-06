import Image from 'next/image';
import React from 'react';
import { Shield, Clock, Users, Headphones, MapPin, Gem } from 'lucide-react';

const WhyChoose = () => {
    const features = [
        {
            icon: Shield,
            title: 'Verified Spaces',
            description:
                'All our partner spaces in Kerala are verified and quality checked for your peace of mind.',
        },
        {
            icon: Clock,
            title: 'Instant Booking',
            description:
                'Book your workspace instantly with our seamless booking process across Kerala.',
        },
        {
            icon: Users,
            title: 'Kerala Community',
            description:
                'Connect with like-minded professionals and entrepreneurs from across Kerala.',
        },
        {
            icon: Headphones,
            title: 'Local Support',
            description:
                'Dedicated Malayalam and English support team to assist you whenever needed.',
        },
        {
            icon: MapPin,
            title: 'Prime Kerala Locations',
            description:
                "Workspaces located in the heart of business districts across Kerala's major cities.",
        },
        {
            icon: Gem,
            title: 'Premium Amenities',
            description:
                'High-speed internet, refreshments, printing, and meeting rooms at every Kerala location.',
        },
    ];

    return (
        <section className="space-y-16">
            {/* Top Section - Why Choose */}
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    Why Choose Cowork Kerala?
                </h2>
                <p className="mt-4 text-lg text-gray-700 md:text-xl">
                    EXPERIENCE THE DIFFERENCE WITH KERALA'S MOST TRUSTED COWORKING PLATFORM
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={index}
                            className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                                <IconComponent className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Section - Call to Action */}
            <div className="overflow-hidden rounded-3xl bg-primary-100">
                <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-7 p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Discover your perfect workspace with Cowork
                        </h3>
                        <p className="mt-4 text-gray-700 md:text-lg">
                            We connect you to top coworking spaces and virtual offices across
                            Kerala. Compare prices, explore amenities, and book instantly—perfect
                            for freelancers, startups, and businesses seeking flexible, professional
                            work environments.
                        </p>
                    </div>
                    <div className="md:col-span-5 relative">
                        <div className="relative h-80 w-full md:h-full">
                            <Image
                                src="/images/hero-banner/people-coworking.png"
                                alt="People working in a modern coworking space"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

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
        <section className="w-full py-8 md:py-12 lg:py-16">
            {/* Top Section - Why Choose */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
                    Why Choose Cowork Kerala?
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 uppercase tracking-wide px-4">
                    EXPERIENCE THE DIFFERENCE WITH KERALA{"'"}S MOST TRUSTED COWORKING PLATFORM
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={index}
                            className="rounded-xl md:rounded-2xl bg-gray-50 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-3 md:mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#CFEAB1]">
                                <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-zinc-800" />
                            </div>
                            <h3 className="mb-1.5 md:mb-2 text-base md:text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Section - Call to Action */}
            <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-[#CFEAB1]/30">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
                    <div className="md:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                            Discover your perfect workspace with Cowork
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                            We connect you to top coworking spaces and virtual offices across
                            Kerala. Compare prices, explore amenities, and book instantly—perfect
                            for freelancers, startups, and businesses seeking flexible, professional
                            work environments.
                        </p>
                    </div>
                    <div className="md:col-span-5 relative">
                        <div className="relative h-64 sm:h-80 md:h-full min-h-[300px] w-full">
                            <Image
                                src="/images/hero-banner/people-coworking.png"
                                alt="People working in a modern coworking space"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

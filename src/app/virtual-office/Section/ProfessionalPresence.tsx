import Image from 'next/image';
import React from 'react';

const ProfessionalPresence = () => {
    return (
        <section className="grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Left Side - Blurred Office Image with Flexibility Text */}
            <div className="md:col-span-6 relative overflow-hidden rounded-3xl">
                <div className="relative h-96 w-full md:h-[500px]">
                    <Image
                        src="/images/hero-banner/people-coworking.png"
                        alt="Modern office space with flexible seating"
                        fill
                        className="object-cover blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/20" />
                </div>

                {/* Flexibility Text Overlay */}
                <div className="absolute bottom-8 left-8">
                    <h3 className="text-4xl font-bold text-primary-100 md:text-5xl">Flexibility</h3>
                </div>
            </div>

            {/* Right Side - Professional Presence Content */}
            <div className="md:col-span-6 flex items-center">
                <div className="space-y-6">
                    {/* Professional Presence Tag */}
                    <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-gray-900">
                        PROFESSIONAL PRESENCE
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        A CREDIBLE BUSINESS
                        <br />
                        ADDRESS
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-700 md:text-xl">
                        Get a premium office address in a prime location without the cost of
                        physical space. Enhance your brand image and build trust with clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalPresence;

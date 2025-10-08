import Image from 'next/image';
import React from 'react';
import { Users, Briefcase, Building2 } from 'lucide-react';

const SpaceAdapts = () => {
    const services = [
        {
            icon: Users,
            title: 'Coworking spaces',
            description:
                'Diam pellentesque commodo volutpat quam. Augue eget tristique nibh vitae risus eu venenatis.',
        },
        {
            icon: Briefcase,
            title: 'Private offices',
            description:
                'Diam pellentesque commodo volutpat quam. Augue eget tristique nibh vitae risus eu venenatis.',
        },
        {
            icon: Building2,
            title: 'Virtual offices',
            description:
                'Diam pellentesque commodo volutpat quam. Augue eget tristique nibh vitae risus eu venenatis.',
        },
    ];

    const avatars = [
        '/images/thumb-1.jpg',
        '/images/thumb-2.png',
        '/images/thumb-1.jpg',
        '/images/thumb-2.png',
        '/images/thumb-1.jpg',
    ];

    return (
        <section className="w-full py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Left Content */}
                <div className="space-y-8">
                    {/* Header */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                            <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-zinc-700">
                                WHY CHOOSE US
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight">
                            A Space That Adapts to Your Needs
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                        Discover and instantly book coworking hubs, private offices, and virtual
                        address services in Kochi, Thiruvananthapuram, Calicut, and Thrissur.
                        Compare real-time pricing, amenities, and locations—whether you&apos;re a
                        freelancer, startup, or enterprise, your ideal workspace is just a click
                        away.
                    </p>

                    {/* CTA Button */}
                    <div>
                        <button className="px-6 py-3 rounded-full bg-[#CFEAB1] text-zinc-900 text-sm font-medium tracking-wide hover:bg-[#bfda9f] transition-colors">
                            DISCOVER MORE
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex items-start gap-12 pt-4">
                        <div>
                            <div className="text-5xl md:text-6xl font-semibold text-zinc-900 mb-2">
                                100+
                            </div>
                            <p className="text-sm md:text-base text-zinc-600">
                                Event Spaces Hosted
                            </p>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-semibold text-zinc-900 mb-2">
                                2,000+
                            </div>
                            <p className="text-sm md:text-base text-zinc-600">5-Star Reviews</p>
                        </div>
                    </div>

                    {/* Community */}
                    <div className="pt-4">
                        <p className="text-base md:text-lg font-medium text-zinc-900 mb-3">
                            Community Coworking 500+
                        </p>
                        <div className="flex items-center -space-x-3">
                            {avatars.map((avatar, index) => (
                                <div
                                    key={index}
                                    className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-zinc-200"
                                >
                                    <Image
                                        src={avatar}
                                        alt={`Community member ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    {/* Hero Image */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                        <Image
                            src="/images/hero-banner/people-coworking.png"
                            alt="Modern coworking space"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Service Cards */}
                    <div className="space-y-4">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#CFEAB1] flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-zinc-800" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpaceAdapts;

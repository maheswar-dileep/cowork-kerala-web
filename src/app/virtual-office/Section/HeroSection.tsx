import Image from 'next/image';
import React from 'react';
import { Mail } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="relative h-96 w-full md:h-[500px]">
                <Image
                    src="/images/hero-banner/people-coworking.png"
                    alt="Modern coworking office with professionals working"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="max-w-4xl">
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                        Work Better,
                        <br />
                        <span className="text-5xl md:text-7xl">Together</span>
                    </h1>
                    {/* Avatar Group */}
                    <div className="mb-4 flex -space-x-2">
                        <Image
                            src="/images/thumb-1.png"
                            alt="Team member"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-white"
                        />
                        <Image
                            src="/images/thumb-2.png"
                            alt="Team member"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-white"
                        />
                        <Image
                            src="/images/thumb-1.jpg"
                            alt="Team member"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-white"
                        />
                    </div>

                    {/* Contact Button */}
                    <div className="flex items-center gap-3">
                        <button className="rounded-full w-44 bg-gray-100 p-2 ps-3 text-gray-900 hover:bg-gray-200 transition-colors flex justify-between items-center">
                            Contact us
                            <button className="flex size-10 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                                <Mail className="size-4" />
                            </button>
                        </button>

                        <p className="mb-6 text-lg text-white md:text-xl max-w-2xl">
                            Redefining Workspaces with Virtual Offices That Give You a Global
                            Presence, Flexibility, and Professional Edge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

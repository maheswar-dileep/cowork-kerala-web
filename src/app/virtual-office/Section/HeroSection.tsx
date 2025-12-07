import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] bg-transparent my-12">
            {/* Decorative Circle */}
            <div className="absolute -left-12 -top-12 size-24 rounded-full bg-[#E9F8D5] -z-10" />

            <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                    src="/images/virtual-office/banner-1.png"
                    alt="Coworking space"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Content */}
                <div className="absolute bottom-10 left-6 md:bottom-16 md:left-12 text-white max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Work Better,
                        <br />
                        <span className="flex items-center gap-4 flex-wrap">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white overflow-hidden relative bg-zinc-300"
                                    >
                                        <Image
                                            src={`/images/thumb-${i > 2 ? 1 : i}.jpg`}
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            Together
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <Link
                            href="/contact"
                            className="flex items-center gap-3 bg-white text-zinc-900 pl-6 pr-2 py-2 rounded-full font-bold text-lg hover:bg-zinc-100 transition-colors"
                        >
                            Contact us
                            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                                <Mail size={18} />
                            </div>
                        </Link>

                        <p className="text-base md:text-lg font-medium max-w-md leading-relaxed text-white/90">
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

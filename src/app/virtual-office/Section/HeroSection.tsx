import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-12 md:mb-20">
            {/* Background Image */}
            <Image
                src="/images/workspace-1.jpg" // Using existing image as placeholder
                alt="Coworking space"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="absolute bottom-10 left-6 md:bottom-16 md:left-12 text-white max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Work Better,<br />Together
                </h1>

                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white overflow-hidden relative">
                                     {/* Placeholder avatars */}
                                     <div className="absolute inset-0 bg-gray-400" />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium">Redefining workplaces</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                         <span className="text-sm font-medium">Join our 200+ users</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

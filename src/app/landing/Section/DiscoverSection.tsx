import React from 'react';
import Image from 'next/image';

const DiscoverSection = () => {
    return (
        <section className="relative w-full h-[400px] rounded-[40px] overflow-hidden mb-20">
            <Image
                src="/images/glimpse/office-floor.png"
                alt="Discover"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/90 to-transparent flex items-center p-8 md:p-20">
                <div className="max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                        Discover your perfect workspace with Cowork
                    </h2>
                    <p className="text-zinc-700 mb-8 leading-relaxed">
                        Whether you need a private office, a dedicated desk, or just a meeting room,
                        we have the perfect solution for you. Join our growing community of
                        professionals and entrepreneurs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;

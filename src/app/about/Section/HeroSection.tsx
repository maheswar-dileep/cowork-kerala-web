import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden rounded-3xl">
            <div className="relative h-[360px] w-full md:h-[480px] lg:h-[540px]">
                <Image
                    src="/images/workspace-1.jpg"
                    alt="Modern collaborative workspace with glass walls"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute inset-0 flex items-center px-6 py-12 md:px-12 ">
                <div className="max-w-3xl space-y-6 text-white">
                    <span className="inline-flex items-center rounded-full bg-primary-200/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900">
                        About Us
                    </span>
                    <h1 className="text-3xl font-semibold leading-tight md:text-5xl md:leading-snug">
                        We{`'`}re all about creating awesome spaces where you can{' '}
                        <span className="text-primary-100">work</span>,{' '}
                        <span className="text-primary-100">connect</span>, and{' '}
                        <span className="text-primary-100">thrive</span>.
                    </h1>
                    <p className="max-w-2xl text-sm leading-relaxed text-zinc-100 md:text-base">
                        Entrepreneurs, freelancers, and growing teams alike will find their perfect
                        spot here. Join our fun and vibrant community and let{`'`}s turn work into
                        an adventure together!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

import LocationCircle from '@/components/atomic/LocationCircle';
import SelectInput from '@/components/atomic/SelectInput';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className="w-full py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left content */}
                <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-zinc-900">
                        We help you find your ideal workspace in kerala
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-700">
                        Discover premium coworking spaces and virtual offices across God{`'`}s Own
                        Country. Professional workspaces in Kochi, Trivandrum, Calicut, Thrissur and
                        more.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                        <SelectInput
                            className="w-full sm:w-48 md:w-56 h-11 md:h-12 rounded-xl bg-[#CFEAB1] text-zinc-800 text-sm md:text-base"
                            placeholder="Looking For"
                            options={[
                                { label: 'Coworking Space', value: 'coworking' },
                                { label: 'Private Office', value: 'private-office' },
                                { label: 'Virtual Office', value: 'virtual-office' },
                            ]}
                        />
                        <SelectInput
                            className="w-full sm:w-48 md:w-56 h-11 md:h-12 rounded-xl bg-[#CFEAB1] text-zinc-800 text-sm md:text-base"
                            placeholder="Select City"
                            options={[
                                { label: 'Kochi', value: 'kochi' },
                                { label: 'Trivandrum', value: 'trivandrum' },
                                { label: 'Calicut', value: 'calicut' },
                                { label: 'Thrissur', value: 'thrissur' },
                            ]}
                        />
                    </div>

                    {/* Locations list */}
                    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 md:gap-4 lg:gap-5">
                        {[
                            'Gurugram',
                            'Hyderabad',
                            'Bangalore',
                            'Mumbai',
                            'Chennai',
                            'Lucknow',
                            'Pune',
                            'Noida',
                            'Delhi',
                            'Indore',
                            'Ahmedabad',
                            'Trivandrum',
                            'Kochi',
                            'Chandigarh',
                            'Kolkata',
                            'Coimbatore',
                            'Goa',
                        ].map((city) => (
                            <LocationCircle key={city} location={city} />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
                        <button className="h-11 md:h-12 px-5 md:px-6 rounded-full bg-zinc-900 text-white text-xs md:text-sm font-medium tracking-wide hover:bg-zinc-800 transition-colors">
                            FIND BEST WORKSPACE
                        </button>
                        <button
                            aria-label="Go"
                            className="size-11 md:size-12 rounded-full border-2 border-zinc-300 flex items-center justify-center hover:bg-zinc-50 transition-colors"
                        >
                            <span className="text-lg md:text-xl">↗</span>
                        </button>
                    </div>
                </div>

                {/* Right images */}
                <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
                    <div className="w-full aspect-[4/3] rounded-2xl md:rounded-3xl bg-[#EBFFD8] overflow-hidden relative">
                        <Image
                            src="/images/hero-banner/people-coworking.png"
                            alt="Coworking space"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                    <div className="w-full sm:w-4/5 aspect-[4/3] rounded-2xl md:rounded-3xl bg-[#EBFFD8] overflow-hidden relative">
                        <Image
                            src="/images/hero-banner/b1.png"
                            alt="Modern workspace"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 80vw, 32vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

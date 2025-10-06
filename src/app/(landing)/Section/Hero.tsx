import LocationCircle from '@/components/atomic/LocationCircle';
import SelectInput from '@/components/atomic/SelectInput';
import React from 'react';

const Hero = () => {
    return (
        <section className="w-full">
            <div className="grid md:grid-cols-12 gap-10 md:gap-12 md:mt-12 items-start">
                {/* Left content */}
                <div className="md:col-span-7 flex flex-col gap-8">
                    <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-zinc-900">
                        We help you find your ideal workspace in kerala
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed font-medium text-zinc-700">
                        Discover premium coworking spaces and virtual offices across God{`'`}s Own
                        Country. Professional workspaces in Kochi, Trivandrum, Calicut , Thrissur and
                        more.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <SelectInput
                            className="w-56 h-12 rounded-xl bg-[#CFEAB1] text-zinc-800"
                            placeholder="Looking For"
                            options={[
                                { label: 'Coworking Space', value: 'coworking' },
                                { label: 'Private Office', value: 'private-office' },
                                { label: 'Virtual Office', value: 'virtual-office' },
                            ]}
                        />
                        <SelectInput
                            className="w-56 h-12 rounded-xl bg-[#CFEAB1] text-zinc-800"
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
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-5 pt-2">
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
                    <div className="flex items-center gap-4 pt-4">
                        <button className="h-12 px-6 rounded-full bg-zinc-900 text-white text-sm tracking-wide">
                            FIND BEST WORKSPACE
                        </button>
                        <button
                            aria-label="Go"
                            className="size-12 rounded-full border border-zinc-300 flex items-center justify-center"
                        >
                            <span className="text-lg">↗</span>
                        </button>
                    </div>
                </div>

                {/* Right images (placeholders) */}
                <div className="md:col-span-5 flex flex-col gap-8">
                    <div className="w-full aspect-[4/3] rounded-3xl bg-[#EBFFD8]" />
                    <div className="w-4/5 aspect-[4/3] rounded-3xl bg-[#EBFFD8]" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

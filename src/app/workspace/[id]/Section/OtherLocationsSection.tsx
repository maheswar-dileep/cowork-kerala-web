import React from 'react';
import Image from 'next/image';

type Location = {
    id: string;
    title: string;
    subtitle: string;
    image: string;
};

const LOCATIONS: Location[] = [
    {
        id: 'opera',
        title: 'Opéra',
        subtitle: 'Pl. de la Mairie, 35000 Rennes',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'commerce',
        title: 'Commerce',
        subtitle: 'Pl. de la République, 35000 Rennes',
        image: '/images/thumb-2.png',
    },
    {
        id: 'triomphe',
        title: 'Triomphe',
        subtitle: 'Pl. Charles de Gaulle, 75008 Paris',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'gustave',
        title: 'Gustave Eiffel',
        subtitle: 'Av. Gustave Eiffel, 75007 Paris',
        image: '/images/thumb-2.png',
    },
];

const LocationCard = ({ location }: { location: Location }) => {
    return (
        <article className="overflow-hidden rounded-3xl bg-white">
            <div className="relative">
                <div className="relative h-96 w-full overflow-hidden rounded-3xl">
                    <Image
                        src={location.image}
                        alt={location.title}
                        fill
                        className="object-cover"
                        // sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div className="text-white">
                            <div className="text-base font-semibold md:text-lg">
                                {location.title}
                            </div>
                            <div className="text-xs md:text-sm text-white/90">
                                {location.subtitle}
                            </div>
                        </div>
                        <button className="pointer-events-auto rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-primary-200">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

const OtherLocationsSection = () => {
    return (
        <section className="w-full">
            <h3 className="mb-6 text-2xl font-semibold md:text-3xl">Other locations in the city</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
                {LOCATIONS.map((loc) => (
                    <LocationCard key={loc.id} location={loc} />
                ))}
            </div>
        </section>
    );
};

export default OtherLocationsSection;

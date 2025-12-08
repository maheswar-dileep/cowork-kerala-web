'use client';
import React from 'react';
import Image from 'next/image';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Location = {
    id: string;
    title: string;
    subtitle: string;
    image: string;
};

const LOCATIONS: Location[] = [
    {
        id: 'opera-1',
        title: 'Opéra',
        subtitle: 'Pl. de la Mairie, 35000 Rennes',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'commerce-1',
        title: 'Commerce',
        subtitle: 'Pl. de la République, 35000 Rennes',
        image: '/images/thumb-2.png',
    },
    {
        id: 'triomphe-1',
        title: 'Triomphe',
        subtitle: 'Pl. Charles de Gaulle, 75008 Paris',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'gustave-1',
        title: 'Gustave Eiffel',
        subtitle: 'Av. Gustave Eiffel, 75007 Paris',
        image: '/images/thumb-2.png',
    },
    {
        id: 'opera-2',
        title: 'Opéra',
        subtitle: 'Pl. de la Mairie, 35000 Rennes',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'commerce-2',
        title: 'Commerce',
        subtitle: 'Pl. de la République, 35000 Rennes',
        image: '/images/thumb-2.png',
    },
    {
        id: 'triomphe-2',
        title: 'Triomphe',
        subtitle: 'Pl. Charles de Gaulle, 75008 Paris',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'gustave-2',
        title: 'Gustave Eiffel',
        subtitle: 'Av. Gustave Eiffel, 75007 Paris',
        image: '/images/thumb-2.png',
    },
    {
        id: 'opera-3',
        title: 'Opéra',
        subtitle: 'Pl. de la Mairie, 35000 Rennes',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'commerce-3',
        title: 'Commerce',
        subtitle: 'Pl. de la République, 35000 Rennes',
        image: '/images/thumb-2.png',
    },
    {
        id: 'triomphe-3',
        title: 'Triomphe',
        subtitle: 'Pl. Charles de Gaulle, 75008 Paris',
        image: '/images/thumb-1.jpg',
    },
    {
        id: 'gustave-3',
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

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

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
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        containScroll: 'trimSnaps',
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold md:text-3xl">Other locations in the city</h3>
                <div className="hidden gap-2">
                    <button
                        onClick={scrollPrev}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                    {LOCATIONS.map((loc) => (
                        <div
                            key={loc.id}
                            className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%] pl-1"
                        >
                            <LocationCard location={loc} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherLocationsSection;

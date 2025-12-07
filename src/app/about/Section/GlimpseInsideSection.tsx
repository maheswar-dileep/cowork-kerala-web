import Image from 'next/image';
import React from 'react';

const GlimpseInsideSection = () => {
    return (
        <section className="w-full">
            <h2 className="mb-8 text-4xl font-semibold text-zinc-900 md:text-5xl">A Glimpse Inside</h2>

            <div className="grid gap-4 md:grid-cols-12 md:gap-6">
                {/* Left Column: Large Vertical Image */}
                <div className="relative md:col-span-5 h-[400px] md:h-auto overflow-hidden rounded-3xl">
                    <Image
                        src="/images/glimpse/standing-desk.png"
                        alt="Woman working at standing desk"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Column: Grid of Images */}
                <div className="md:col-span-7 flex flex-col gap-4 md:gap-6">
                    {/* Top Row: Wide Image */}
                    <div className="relative h-[200px] md:h-[280px] w-full overflow-hidden rounded-3xl">
                        <Image
                            src="/images/glimpse/group-discussion.png"
                            alt="Group discussion in lounge"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Bottom Row: 3 Images */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                        <div className="relative h-[180px] md:h-[220px] overflow-hidden rounded-3xl">
                            <Image
                                src="/images/glimpse/open-office.png"
                                alt="Open office space"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[180px] md:h-[220px] overflow-hidden rounded-3xl">
                            <Image
                                src="/images/glimpse/office-floor.png"
                                alt="Office floor view"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative col-span-2 md:col-span-1 h-[180px] md:h-[220px] overflow-hidden rounded-3xl">
                            <Image
                                src="/images/glimpse/meeting-room.png"
                                alt="Meeting room"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlimpseInsideSection;

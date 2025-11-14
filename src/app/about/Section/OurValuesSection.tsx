import Image from 'next/image';
import React from 'react';
import { UsersRound, Leaf, Lightbulb, StretchHorizontal } from 'lucide-react';

const values = [
    {
        icon: <UsersRound className="h-5 w-5 text-zinc-800" />,
        title: 'Community Building',
        desc: 'Building a space where everyone feels welcome and connected within the group.',
    },
    {
        icon: <Leaf className="h-5 w-5 text-zinc-800" />,
        title: 'Sustainable Actions',
        desc: 'Committed to eco-friendly practices by reducing our energy usage for the future.',
    },
    {
        icon: <Lightbulb className="h-5 w-5 text-zinc-800" />,
        title: 'Incubating Innovations',
        desc: 'Fostering an environment that encourages new ideas and growth for our users.',
    },
    {
        icon: <StretchHorizontal className="h-5 w-5 text-zinc-800" />,
        title: 'Room for Flexibility',
        desc: 'Offering various workspaces to suit your unique needs. Be flexible as you need.',
    },
];

const OurValuesSection = () => {
    return (
        <section className="w-full rounded-3xl bg-primary-100 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                {/* Left: Title + Image */}
                <div className="md:col-span-5 flex flex-col gap-6">
                    <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl">Our Values</h2>
                    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 aspect-[4/3]">
                        <Image
                            src="/images/workspace-1.jpg"
                            alt="Collaborative workspace"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Cards */}
                <div className="md:col-span-7 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="rounded-2xl border border-zinc-300 bg-white/70 p-5 md:p-6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]"
                        >
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-200">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900">{v.title}</h3>
                            </div>
                            <p className="text-zinc-700 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValuesSection;

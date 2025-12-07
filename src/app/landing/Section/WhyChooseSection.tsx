import React from 'react';
import { Monitor, Zap, Users, Headphones, ShieldCheck, Clock } from 'lucide-react';

const features = [
    {
        icon: Monitor,
        title: 'Online Access',
        desc: 'Find and book your perfect workspace online with ease.',
    },
    {
        icon: Zap,
        title: 'Instant Booking',
        desc: 'Book meeting rooms and desks instantly without hassle.',
    },
    {
        icon: Users,
        title: 'Vibrant Community',
        desc: 'Connect with like-minded professionals and grow your network.',
    },
    {
        icon: Headphones,
        title: 'Local Support',
        desc: 'Get dedicated support from our local team whenever you need.',
    },
    {
        icon: ShieldCheck,
        title: 'Safe & Confidential',
        desc: 'Your data and privacy are our top priority. Secure environment.',
    },
    {
        icon: Clock,
        title: 'Flexible Timings',
        desc: 'Access your workspace 24/7 with our flexible plans.',
    },
];

const WhyChooseSection = () => {
    return (
        <section className="w-full mb-20 text-center">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                    Why Choose Cowork Kerala?
                </h2>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    Experience the difference with Kerala&apos;s most trusted coworking platform
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-4 p-6 rounded-3xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-2">
                            <feature.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900">{feature.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseSection;

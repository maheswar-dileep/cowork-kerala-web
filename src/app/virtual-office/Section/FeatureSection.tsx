import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: 'A CREDIBLE BUSINESS ADDRESS',
        heading: 'Flexibility',
        desc: 'Get a premium office address in a prime location without the cost of physical space. Enhance your brand image and build trust with clients.',
        tag: 'PROFESSIONAL PRESENCE',
        bg: 'bg-[#F3F1EB]',
        tagBg: 'bg-[#D4E7A6]',
        image: '/images/glimpse/standing-desk.png',
        imageLeft: true,
    },
    {
        title: 'WORK FROM ANYWHERE',
        heading: 'Networking Opportunities',
        desc: 'Operate your business remotely while maintaining a strong presence in prime markets. Stay connected with clients worldwide without being tied to a physical office.',
        tag: 'GLOBAL ACCESSIBILITY',
        bg: 'bg-[#D4E7A6]',
        tagBg: 'bg-[#1A2818] text-white',
        image: '/images/glimpse/group-discussion.png',
        imageLeft: false,
    },
    {
        title: 'SMART BUSINESS SOLUTION',
        heading: 'Cost-Effective',
        desc: 'A virtual office gives you all the benefits of a prime business address and mail services at a fraction of the cost of a physical office. It\'s perfect for startups, freelancers, and growing businesses looking to maintain professionalism without heavy overheads.',
        tag: 'COST-EFFECTIVE',
        bg: 'bg-[#F3F1EB]',
        tagBg: 'bg-[#D4E7A6]',
        image: '/images/glimpse/open-office.png',
        imageLeft: true,
    },
];

const FeatureSection = () => {
    return (
        <div className="flex flex-col">
            {features.map((feature, index) => (
                <section key={index} className={`w-full ${feature.bg} grid grid-cols-1 md:grid-cols-2`}>
                    {/* Image Side */}
                    <div className={`relative h-[400px] md:h-[600px] w-full ${feature.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                        <Image
                            src={feature.image}
                            alt={feature.heading}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-5xl md:text-7xl font-light text-white/90 tracking-tight">{feature.heading}</h2>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={`flex flex-col justify-center p-8 md:p-20 ${feature.imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="mb-6">
                            <span className={`inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider ${feature.tagBg}`}>
                                {feature.tag}
                            </span>
                        </div>
                        <h3 className="mb-6 text-2xl md:text-3xl font-bold text-zinc-900 uppercase leading-tight">
                            {feature.title}
                        </h3>
                        <p className="text-zinc-700 leading-relaxed text-lg">
                            {feature.desc}
                        </p>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default FeatureSection;

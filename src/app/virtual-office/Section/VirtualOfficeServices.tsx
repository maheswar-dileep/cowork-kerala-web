import Image from 'next/image';
import React from 'react';

const VirtualOfficeServices = () => {
    const services = [
        {
            id: 1,
            title: 'Virtual office for GST Registration',
            description:
                'Build credibility for your business with a prestigious address and hassle-free GST registration support.',
            image: '/images/hero-banner/people-coworking.png',
        },
        {
            id: 2,
            title: 'Virtual office for Business Registration',
            description:
                'Establish your company with ease and gain instant access to a professional business identity.',
            image: '/images/thumb-1.jpg',
        },
        {
            id: 3,
            title: 'Virtual office for Mailing Address',
            description:
                'Get a secure and reliable mailing address to manage all your business correspondence seamlessly.',
            image: '/images/thumb-2.png',
        },
    ];

    return (
        <section className="rounded-3xl bg-primary-50/60 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-gray-900 mb-4">
                    FEATURES
                </div>
                <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    Virtual Office Services
                </h2>
            </div>

            {/* Service Cards */}
            <div className="grid gap-8 md:grid-cols-3">
                {services.map((service) => (
                    <div key={service.id} className="space-y-6">
                        {/* Service Number */}
                        <div className="text-6xl font-bold text-primary-600">
                            {service.id.toString().padStart(2, '0')}
                        </div>

                        {/* Service Content */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>

                            <p className="text-gray-700">{service.description}</p>

                            <button className="rounded-full bg-primary-100 px-6 py-2 text-gray-900 hover:bg-primary-200 transition-colors">
                                Get quote
                            </button>
                        </div>

                        {/* Service Image */}
                        <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VirtualOfficeServices;

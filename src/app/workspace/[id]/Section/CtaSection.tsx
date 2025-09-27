import React from 'react';
import Image from 'next/image';
import { Wifi, Clock, Users, ArrowRight } from 'lucide-react';
import { BiChair } from 'react-icons/bi';

const CtaSection = () => {
    return (
        <section>
            <div className="overflow-hidden rounded-3xl border border-gray-200">
                <div className="grid items-stretch md:grid-cols-12">
                    <div className="md:col-span-7 bg-primary-500 text-white p-5 md:p-8">
                        <div className="flex flex-col md:flex-row md:gap-6">
                            <div className="flex flex-col">
                                <h3 className="text-2xl md:text-3xl font-semibold">
                                    Ready to find your flow?
                                </h3>
                                <p className="mt-3 max-w-xl text-lg text-white/90">
                                    Join a community of driven professionals built for focus,
                                    flexibility, and real connection. Your desk is waiting.
                                </p>
                            </div>
                            <div className="mt-5 flex md:flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <Wifi size={16} /> 500 Mbps Wi-Fi
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> 24/7 Access
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={16} /> Meeting Rooms
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiChair size={16} /> Ergonomic Chair
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-900 hover:bg-gray-100">
                                Contact us
                                <span className="grid size-6 place-items-center rounded-full bg-black text-white">
                                    <ArrowRight size={14} />
                                </span>
                            </button>
                            <div className="hidden items-center gap-3 md:flex">
                                <div className="flex -space-x-2">
                                    <Image
                                        src="/images/thumb-1.png"
                                        alt="avatar"
                                        width={28}
                                        height={28}
                                        className="rounded-full border-2 border-primary-500"
                                    />
                                    <Image
                                        src="/images/thumb-2.png"
                                        alt="avatar"
                                        width={28}
                                        height={28}
                                        className="rounded-full border-2 border-primary-500"
                                    />
                                    <Image
                                        src="/images/thumb-1.jpg"
                                        alt="avatar"
                                        width={28}
                                        height={28}
                                        className="rounded-full border-2 border-primary-500"
                                    />
                                </div>
                                <span className="text-sm text-white/90">
                                    Join 500+ professionals
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative md:col-span-5">
                        <div className="relative h-56 w-full md:h-full">
                            <Image
                                src="/images/hero-banner/people-coworking.png"
                                alt="People coworking"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;

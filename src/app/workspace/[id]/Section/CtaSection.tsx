import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Clock, Users, Mail } from 'lucide-react';
import { BiChair } from 'react-icons/bi';

const CtaSection = () => {
    return (
        <section>
            <div className="overflow-hidden rounded-3xl bg-[#4D898B]">
                <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-7 p-8 md:p-16 text-white flex flex-col justify-center">
                        <h3 className="text-3xl md:text-5xl font-medium mb-6">
                            Ready to find your flow?
                        </h3>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
                            Join a community of driven professionals built for focus, flexibility,
                            and real connection. Your desk is waiting.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                            <div className="flex items-center gap-3">
                                <Wifi className="shrink-0" size={22} />{' '}
                                <span className="text-lg">500 Mbps Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="shrink-0" size={22} />{' '}
                                <span className="text-lg">24/7 Access</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="shrink-0" size={22} />{' '}
                                <span className="text-lg">Meeting Rooms</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BiChair className="shrink-0" size={22} />{' '}
                                <span className="text-lg">Ergonomic Chair</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-gray-900 font-medium hover:bg-gray-100 transition-colors"
                            >
                                Contact us
                                <span className="grid size-8 place-items-center rounded-full bg-black text-white">
                                    <Mail size={16} />
                                </span>
                            </Link>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    <div className="relative size-10 rounded-full border-2 border-[#4D898B] overflow-hidden">
                                        <Image
                                            src="/images/thumb-1.png"
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative size-10 rounded-full border-2 border-[#4D898B] overflow-hidden">
                                        <Image
                                            src="/images/thumb-2.png"
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative size-10 rounded-full border-2 border-[#4D898B] overflow-hidden">
                                        <Image
                                            src="/images/thumb-1.jpg"
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-white/90">
                                    Join 500+ professionals
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 relative min-h-[300px] md:min-h-full">
                        <Image
                            src="/images/hero-banner/people-coworking.png"
                            alt="People coworking"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;

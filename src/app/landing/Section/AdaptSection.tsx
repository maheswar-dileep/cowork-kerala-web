import React from 'react';
import Image from 'next/image';
import { Users, Building, Monitor } from 'lucide-react';

const AdaptSection = () => {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 order-2 lg:order-1">
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        About Cowork
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">
                        It&apos;s not just about space, it&apos;s about how you work.
                    </h2>
                    <p className="text-zinc-600 leading-relaxed">
                        Whether you&apos;re a freelancer, a startup, or an established enterprise,
                        we have the perfect space for you. Flexible memberships, premium amenities,
                        and a vibrant community await.
                    </p>
                </div>

                <button className="w-fit bg-primary-100 text-zinc-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-200 transition-colors">
                    LEARN MORE
                </button>

                <div className="flex items-center gap-12 mt-4">
                    <div>
                        <h3 className="text-4xl font-bold text-zinc-900">100+</h3>
                        <p className="text-sm text-zinc-500">Shared Workspaces</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-zinc-900">2,000+</h3>
                        <p className="text-sm text-zinc-500">Daily Users</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden relative"
                            >
                                {/* Placeholder avatars */}
                                <div className="absolute inset-0 bg-gray-300" />
                            </div>
                        ))}
                    </div>
                    <span className="text-sm font-medium text-zinc-600">
                        Community Growing Daily
                    </span>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
                <div className="relative w-full h-[250px] rounded-3xl overflow-hidden mb-6">
                    <Image
                        src="/images/glimpse/office-floor.png"
                        alt="Coworking"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                            <Users size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900">Coworking Spaces</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Open seating in a collaborative environment. Perfect for freelancers
                                and remote workers.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                            <Building size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900">Private Offices</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Fully furnished private cabins for teams of all sizes. Secure and
                                quiet.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                            <Monitor size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900">Virtual Offices</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Professional business address and mail handling without the physical
                                space.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdaptSection;

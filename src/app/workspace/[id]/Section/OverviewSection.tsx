import { IndianRupee, Users } from 'lucide-react';
import React from 'react';
import Form from '../forms/Form';
import { PiChairLight, PiResize } from 'react-icons/pi';
import { MdArrowOutward } from 'react-icons/md';

const OverviewSection = () => {
    return (
        <section className="grid gap-8 md:gap-28 md:grid-cols-6">
            <div className="md:col-span-4">
                <nav className="mb-6 flex gap-6 text-gray-700">
                    <button className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-300">
                        Overview
                    </button>
                    <button className="hover:opacity-80">Spaces</button>
                    <button className="hover:opacity-80">Services</button>
                    <button className="hover:opacity-80">Access</button>
                </nav>

                <p className="text-gray-800">k
                    Located in Trivandrum, our Commerce space blends modern design with local charm.
                    Just a short walk from the city{`'`}s lively cafés, it{`'`}s an ideal spot for
                    freelancers and teams seeking inspiration, flexibility, and community.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex items-center gap-2">
                        <PiResize size={16} /> 240 sqm
                    </div>
                    <div className="flex items-center gap-2">
                        <Users size={16} /> 50 people
                    </div>
                    <div className="flex items-center gap-2">
                        <PiChairLight size={16} /> 40 desks
                    </div>
                    <div className="flex items-center gap-2">
                        <IndianRupee size={16} /> From $699 /month
                    </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold">Available Services</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {[
                        { title: 'Hot Desk', desc: 'Sit anywhere, stay flexible' },
                        { title: 'Dedicated Desk', desc: 'Your own desk, every day' },
                        { title: 'Private Office', desc: 'Focus and grow with your team' },
                        { title: 'Meeting Room', desc: 'Where ideas take shape' },
                    ].map((s) => (
                        <div key={s.title} className="rounded-xl border border-gray-200 p-4 flex w-full justify-between">
                            <div className="">
                                <div className="font-medium">{s.title}</div>
                                <div className="text-gray-600">{s.desc}</div>
                            </div>
                            <div className="size-12 border rounded-full flex justify-center items-center">
                                <MdArrowOutward size={22} />
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="mt-8 text-xl font-semibold">Amenities</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                    {[
                        'Hot desks',
                        'Dedicated desks',
                        '500 Mbps Wifi',
                        'Daily Cleaning',
                        'Soundproof booths',
                        'Private offices',
                        'Meeting rooms',
                        'Ergonomic Chairs',
                        'On-site Parking',
                    ].map((a) => (
                        <div key={a} className="text-gray-800">
                            {a}
                        </div>
                    ))}
                </div>
            </div>

            <Form />
        </section>
    );
};

export default OverviewSection;

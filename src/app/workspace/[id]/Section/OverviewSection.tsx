import {
    IndianRupee,
    Users,
    Timer,
    Monitor,
    Lock,
    Wifi,
    Armchair,
    Sparkles,
    Car,
    VolumeX,
} from 'lucide-react';
import Form from '../forms/Form';
import { PiChairLight, PiResize } from 'react-icons/pi';

const OverviewSection = () => {
    return (
        <section className="grid gap-8 md:gap-28 md:grid-cols-8">
            <div className="md:col-span-5">
                <nav className="mb-6 flex gap-6 text-gray-700">
                    <button className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-300">
                        Overview
                    </button>
                    <button className="hover:opacity-80">Spaces</button>
                    <button className="hover:opacity-80">Services</button>
                    <button className="hover:opacity-80">Access</button>
                </nav>

                <p className="text-gray-800">
                    Located in Trivandrum, our Commerce space blends modern design with local charm.
                    Just a short walk from the city{`'`}s lively cafés, it
                    {`'`}s an ideal spot for freelancers and teams seeking inspiration, flexibility,
                    and community.
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

                <h3 className="mt-8 text-2xl font-medium">Available Services</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {[
                        {
                            title: 'Hot Desk',
                            desc: 'Sit anywhere, stay flexible',
                            icon: Timer,
                        },
                        {
                            title: 'Dedicated Desk',
                            desc: 'Your own desk, every day',
                            icon: Monitor,
                        },
                        {
                            title: 'Private Office',
                            desc: 'Focus and grow with your team',
                            icon: Lock,
                        },
                        {
                            title: 'Meeting Room',
                            desc: 'Where ideas take shape',
                            icon: Users,
                        },
                    ].map((s) => (
                        <div
                            key={s.title}
                            className="rounded-xl border border-gray-200 p-4 flex w-full items-center gap-4"
                        >
                            <div className="size-12 rounded-full bg-primary-50 flex justify-center items-center text-primary-600 shrink-0">
                                <s.icon size={20} />
                            </div>
                            <div className="">
                                <div className="font-medium">{s.title}</div>
                                <div className="text-gray-600 text-sm">{s.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="mt-8 text-2xl font-medium">Amenities</h3>
                <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-3 md:grid-cols-2">
                    {[
                        { label: 'Hot desks', icon: Timer },
                        { label: 'Private officies', icon: Lock },
                        { label: 'Dedicated desks', icon: Monitor },
                        { label: 'Meeting rooms', icon: Users },
                        { label: '500 Mbps Wifi', icon: Wifi },
                        { label: 'Ergonomic Chairs', icon: Armchair },
                        { label: 'Daily Cleaning', icon: Sparkles },
                        { label: 'On-site Parking', icon: Car },
                        { label: 'Soundproof booths', icon: VolumeX },
                    ].map((a) => (
                        <div key={a.label} className="text-gray-600 flex items-center gap-3">
                            <a.icon size={20} />
                            {a.label}
                        </div>
                    ))}
                </div>
            </div>

            <Form />
        </section>
    );
};

export default OverviewSection;

import React from 'react';
import { Wifi, Armchair, Building2, Printer, Car, Coffee, Lock, Monitor, Fan } from 'lucide-react';

const solutions = [
    { icon: Wifi, title: 'High Speed Internet' },
    { icon: Armchair, title: 'Ergonomic Furniture' },
    { icon: Building2, title: 'Fully Furnished Offices' },
    { icon: Armchair, title: 'Leisure Areas' }, // Using Armchair as placeholder for Leisure
    { icon: Coffee, title: 'Snacks and Beverages' },
    { icon: Printer, title: 'Printing and Scanning' },
    { icon: Lock, title: 'Lockers' },
    { icon: Car, title: 'Parking' },
    { icon: Wifi, title: 'Mail Service' }, // Using Wifi as placeholder
    { icon: Armchair, title: 'Relax Zones' }, // Using Armchair as placeholder
    { icon: Monitor, title: 'VOIP Calling' },
    { icon: Fan, title: 'Air Conditioning' },
];

const SolutionsSection = () => {
    return (
        <section className="w-full bg-primary-500 py-16 px-6 md:px-12 text-center">
            <div className="flex flex-col items-center gap-4 mb-12">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-900">
                    Amenities
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-white">
                    Seamless Work Solutions
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                {solutions.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 bg-white/10 rounded-full px-6 py-4 backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-500 shrink-0">
                            <item.icon size={20} />
                        </div>
                        <span className="text-white font-medium text-left text-sm md:text-base">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SolutionsSection;

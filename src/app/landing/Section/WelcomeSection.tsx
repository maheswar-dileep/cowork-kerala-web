import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
    return (
        <section className="relative w-full h-[500px] overflow-hidden">
            <Image src="/images/workspace-1.jpg" alt="Welcome" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl leading-tight">
                    Welcome a new way of productivity & collaboration
                </h2>
                <button className="flex items-center gap-2 bg-primary-100 text-zinc-900 px-8 py-3 rounded-full text-sm font-bold hover:bg-primary-200 transition-colors uppercase tracking-wider">
                    <span>Book Space</span>
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <ArrowRight size={14} />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default WelcomeSection;

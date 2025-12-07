import React from 'react';
import Image from 'next/image';

const EnquirySection = () => {
    return (
        <section className="w-full bg-primary-100 rounded-[40px] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                    Let us find your perfect Property
                </h2>
                <p className="text-zinc-600 mb-8">Connect with us to find your dream workspace</p>

                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none text-zinc-400">
                            <option>Select Service *</option>
                            <option>Coworking</option>
                            <option>Private Office</option>
                        </select>
                        <select className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none text-zinc-400">
                            <option>Select City *</option>
                            <option>Kochi</option>
                            <option>Trivandrum</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-fit bg-primary-500 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-primary-600 transition-colors uppercase tracking-wider mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="relative w-full md:w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white shrink-0">
                <Image
                    src="/images/glimpse/group-discussion.png"
                    alt="Enquiry"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default EnquirySection;

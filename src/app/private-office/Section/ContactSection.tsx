import React from 'react';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-20">
            {/* Left: Image with Overlay */}
            <div className="relative h-[400px] md:h-auto rounded-3xl overflow-hidden">
                <Image
                    src="/images/glimpse/open-office.png" // Placeholder
                    alt="Contact us"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Fill out the form, and we'll get back to you soon.
                    </h2>
                    <div className="flex flex-col gap-3 text-white/90">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5" />
                            <span>+1 23 45 654 98</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5" />
                            <span>coworkspace@mail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="bg-primary-100 rounded-3xl p-8 md:p-12">
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-zinc-800">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Insert name"
                                className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-zinc-800">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="Insert phone number"
                                className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-zinc-800">Mail</label>
                        <input
                            type="email"
                            placeholder="Insert email address"
                            className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-zinc-800">
                                Select Type
                            </label>
                            <select className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none text-zinc-600">
                                <option>Private Office</option>
                                <option>Dedicated Desk</option>
                                <option>Hot Desk</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-zinc-800">
                                Number of Seats
                            </label>
                            <input
                                type="number"
                                placeholder="1"
                                className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-zinc-800">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            rows={4}
                            className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full rounded-xl bg-primary-500 py-4 text-sm font-bold text-white transition-colors hover:bg-primary-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;

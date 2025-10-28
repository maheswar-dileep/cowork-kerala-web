import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="grid gap-10 md:grid-cols-2 md:gap-16">
            {/* Left: Simple Contact Form */}
            <div>
                <form className="space-y-5">
                    <div className="grid gap-4 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Name"
                            className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 focus:border-primary-300 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 focus:border-primary-300 focus:outline-none"
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        rows={8}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary-300 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="h-12 w-full bg-primary-400 rounded-md text-white font-medium hover:bg-primary-700 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col gap-6">
                <p className="text-zinc-700 leading-relaxed">
                    Feel free to contact us if you have any questions, concerns, or need assistance
                    with anything at all. We are here to help and are always happy to provide
                    support. Your satisfaction are our top priorities.
                </p>

                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center">
                        <Phone className="text-primary-500 font-bold" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Phone Number</p>
                        <p className="text-zinc-700">+123 456 7890</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center">
                        <Mail className="text-primary-500 font-bold" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Email Address</p>
                        <p className="text-zinc-700">info@xplore.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center">
                        <MapPin className="text-primary-500 font-bold" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Address</p>
                        <p className="text-zinc-700">
                            123 Wanderer Street, City Name, State Name, Nation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

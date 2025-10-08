import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import Fixedw from './Fixedw';

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 pt-12">
            <Fixedw>
                <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-6">
                        <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                            Let{`'`}s Keep in Touch
                            <br /> with Us!
                        </h2>

                        <p className="mt-5 max-w-xl text-gray-700">
                            Contact us today to explore the possibilities of our dynamic co-working
                            space. Your ideal workspace is just a message or call away with us.
                        </p>

                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 text-gray-900">
                                <Phone size={16} />
                                <span>+91 9999-878-398</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-900">
                                <Mail size={16} />
                                <span>hello@coworkkerala.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-900">
                                <MapPin size={16} />
                                <span>Marine Drive Business Center, Kochi, Kerala 682031</span>
                            </div>
                        </div>

                        <div className="my-8 h-px w-full bg-gray-200" />

                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                    <li>
                                        <a className="hover:opacity-80" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:opacity-80" href="#">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Spaces</h3>
                                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                    <li>
                                        <a className="hover:opacity-80" href="#">
                                            Private Office
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:opacity-80" href="#">
                                            Virtual Office
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Quick Link</h3>
                                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                    <li>
                                        <a className="hover:opacity-80" href="#">
                                            Spaces
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:opacity-80" href="#">
                                            Events
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="relative overflow-hidden rounded-3xl border border-gray-200">
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src="/images/hero-banner/people-coworking.png"
                                    alt="Coworking space"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                                <div className="max-w-xl rounded-2xl bg-black/40 p-4 text-white backdrop-blur">
                                    <div className="text-xl font-medium">Newsletter</div>
                                    <div className="mt-3 flex items-center gap-3">
                                        <input
                                            type="email"
                                            placeholder="email@framer.com"
                                            className="h-11 w-full rounded-full border border-white/30 bg-white/90 px-4 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                                        />
                                        <button className="shrink-0 rounded-full bg-white px-4 py-2 text-gray-900 hover:bg-gray-100">
                                            Connect
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-gray-200 py-6 text-sm text-gray-600">
                    <div>© {new Date().getFullYear()} Cowork Kerala. All rights reserved.</div>
                    <div className="flex gap-4">
                        <a className="hover:opacity-80" href="#">
                            Privacy
                        </a>
                        <a className="hover:opacity-80" href="#">
                            Terms
                        </a>
                    </div>
                </div>
            </Fixedw>
        </footer>
    );
};

export default Footer;

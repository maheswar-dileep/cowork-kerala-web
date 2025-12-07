'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from 'react-icons/io';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex items-center justify-between py-6 relative">
            <Link href="/" className="relative w-32 md:w-40 h-10 md:h-12 z-50">
                <Image
                    src="/logo/logo.png"
                    alt="Cowork Kerala"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex items-center gap-8 text-base font-medium text-zinc-800">
                    <li>
                        <Link
                            href="/workspace"
                            className="hover:text-primary-600 flex items-center gap-1 transition-colors"
                        >
                            <span>Coworking Spaces</span>
                            <IoIosArrowDown size={14} className="text-zinc-400" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/virtual-office"
                            className="hover:text-primary-600 flex items-center gap-1 transition-colors"
                        >
                            <span>Virtual Office</span>
                            <IoIosArrowDown size={14} className="text-zinc-400" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/private-office"
                            className="hover:text-primary-600 flex items-center gap-1 transition-colors"
                        >
                            <span>Private Office</span>
                            <IoIosArrowDown size={14} className="text-zinc-400" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-primary-600 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-primary-600 transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 p-2 text-zinc-800"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <IoIosClose size={32} /> : <IoIosMenu size={32} />}
            </button>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden animate-in slide-in-from-top-10 fade-in duration-200">
                    <nav>
                        <ul className="flex flex-col gap-6 text-lg font-medium text-zinc-800">
                            <li>
                                <Link
                                    href="/workspace"
                                    className="flex items-center justify-between border-b border-zinc-100 pb-4"
                                    onClick={toggleMenu}
                                >
                                    <span>Coworking Spaces</span>
                                    <IoIosArrowDown size={16} className="text-zinc-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/virtual-office"
                                    className="flex items-center justify-between border-b border-zinc-100 pb-4"
                                    onClick={toggleMenu}
                                >
                                    <span>Virtual Office</span>
                                    <IoIosArrowDown size={16} className="text-zinc-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/private-office"
                                    className="flex items-center justify-between border-b border-zinc-100 pb-4"
                                    onClick={toggleMenu}
                                >
                                    <span>Private Office</span>
                                    <IoIosArrowDown size={16} className="text-zinc-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block border-b border-zinc-100 pb-4"
                                    onClick={toggleMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block border-b border-zinc-100 pb-4"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Header;

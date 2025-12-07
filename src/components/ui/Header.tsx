import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    return (
        <div className="flex items-center justify-between py-6">
            <Link href="/" className="relative w-40 h-12">
                <Image
                    src="/logo/logo.png"
                    alt="Cowork Kerala"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </Link>

            <nav className="hidden md:flex">
                <ul className="flex items-center gap-8 text-sm font-medium text-zinc-800">
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
        </div>
    );
};

export default Header;

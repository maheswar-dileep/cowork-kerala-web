import React from 'react';
import Link from 'next/link';
import { SearchIcon } from 'lucide-react';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    return (
        <div className="flex items-center justify-between py-5">
            <div className="text-lg font-bold tracking-tight">Cowork Kerala</div>
            <nav className="hidden md:flex">
                <ul className="flex items-center space-x-6 text-sm">
                    <li>
                        <Link href="/workspace" className="hover:opacity-80 flex gap-2 items-end-safe">
                            <span className="align-middle">Coworking Spaces</span>
                            <IoIosArrowDown size={18} className="font-light" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/virtual-office" className="hover:opacity-80 flex gap-2 items-end-safe">
                            <span className="align-middle">Virtual Office</span>
                            <IoIosArrowDown size={18} className="font-light" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/private-office" className="hover:opacity-80 flex gap-2 items-end-safe">
                            <span className="align-middle">Private Office</span>
                            <IoIosArrowDown size={18} className="font-light" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:opacity-80">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:opacity-80">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="hidden md:block">
                <button className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-primary-200 flex items-center gap-2">
                    <SearchIcon size={18} />
                    <span className="align-middle">Search</span>
                </button>
            </div>
        </div>
    );
};

export default Header;

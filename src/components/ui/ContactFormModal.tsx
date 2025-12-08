'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { getLocations, Location } from '@/services/locations';

type ContactFormModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (e: React.FormEvent) => void;
    locations: Location[];
};

const ContactFormModal = ({ isOpen, onClose, onSubmit, locations }: ContactFormModalProps) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(e);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl p-6 md:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={24} className="text-[#1A2818]" />
                </button>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2818] mb-6">
                    Get in Touch
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Jane Smith"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="0123 456 789"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="jane@framer.com"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm placeholder:text-gray-400"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Space Type
                            </label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm appearance-none text-gray-600">
                                    <option>Select Spaces...</option>
                                    <option>Private Office</option>
                                    <option>Virtual Office</option>
                                    <option>Meeting Room</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L5 5L9 1"
                                            stroke="#9CA3AF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                                Number of Seats
                            </label>
                            <input
                                type="number"
                                placeholder="1"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                            Location
                        </label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm appearance-none text-gray-600">
                                <option>Select...</option>
                                {locations.map((loc) => (
                                    <option key={loc.id || loc.name} value={loc.name}>
                                        {loc.name}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L5 5L9 1"
                                        stroke="#9CA3AF"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-wider text-[#1A2818] uppercase">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Write your message"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#1A2818]/20 focus:border-[#1A2818]/30 outline-none text-sm placeholder:text-gray-400 resize-none"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-white hover:bg-gray-100 text-[#1A2818] font-medium py-3 rounded-lg transition-colors duration-200 border border-[#1A2818]/20"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 bg-[#4d898b] hover:bg-[#3b6874] text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-sm"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactFormModal;

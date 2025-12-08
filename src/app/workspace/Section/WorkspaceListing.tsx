'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, DollarSign, ArrowRight } from 'lucide-react';
import { Workspace } from '@/services/workspace.service';
import { Location } from '@/services/locations';
import ContactFormModal from '@/components/ui/ContactFormModal';

const WorkspaceCard = ({
    workspace,
    onGetQuote,
}: {
    workspace: Workspace;
    onGetQuote: (e: React.MouseEvent) => void;
}) => {
    // Determine price to display
    const displayPrice = workspace.pricing.privateOffice
        ? `From ₹${workspace.pricing.privateOffice} /month`
        : workspace.pricing.dedicatedDesk
        ? `From ₹${workspace.pricing.dedicatedDesk} /month`
        : workspace.pricing.hotDesk
        ? `From ₹${workspace.pricing.hotDesk} /day`
        : 'Contact for pricing';

    // Determine image to display
    const displayImage =
        workspace.images.length > 0 ? workspace.images[0] : '/images/placeholder.jpg';

    return (
        <Link href={`/workspace/${workspace.id}`} className="block h-full group">
            <article className="overflow-hidden rounded-2xl border border-gray-200 md:border-0 flex flex-col h-full">
                <div className="relative">
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                            src={displayImage}
                            alt={workspace.spaceName}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <div className="flex items-center justify-between gap-4 rounded-tr-xl bg-primary-100/90 px-4 py-2 backdrop-blur">
                            <h3 className="text-base font-semibold md:text-sm">
                                {workspace.spaceName}
                            </h3>
                            <button
                                aria-label="View workspace"
                                className="grid size-6 place-items-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                <ArrowRight sizhover:shadow-lge={16} className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 p-5 md:p-0 md:py-2 flex flex-col grow">
                    <p className="text-sm text-gray-700 line-clamp-3 lg:line-clamp-none col-span-3 grow">
                        {workspace.shortDescription || workspace.longDescription}
                    </p>
                    <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-between text-sm mt-auto">
                        <div className="flex items-center gap-2 gap-y-4 text-gray-800 text-xs md:text-sm">
                            <Users size={16} />
                            <span>1 - 10 Persons</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                            <DollarSign size={16} />
                            <span>{displayPrice}</span>
                        </div>
                        <button
                            onClick={onGetQuote}
                            className="rounded-full bg-primary-100 px-3 py-1.5 text-gray-900 hover:bg-primary-200 transition-colors z-10 relative"
                        >
                            Get quote
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
};

type Props = {
    workspaces: Workspace[];
    locations: Location[];
};

const WorkspaceListing = ({ workspaces, locations }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGetQuote = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation
        e.stopPropagation(); // Stop event bubbling
        setIsModalOpen(true);
    };

    if (!workspaces || workspaces.length === 0) {
        return (
            <section className="w-full py-12 text-center">
                <p className="text-gray-500">No workspaces found matching your criteria.</p>
            </section>
        );
    }

    return (
        <section className="w-full">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {workspaces.map((ws) => (
                    <WorkspaceCard key={ws.id} workspace={ws} onGetQuote={handleGetQuote} />
                ))}
            </div>
            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                locations={locations}
            />
        </section>
    );
};

export default WorkspaceListing;

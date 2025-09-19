import React from 'react';
import Image from 'next/image';
import { Users, DollarSign, ArrowRight } from 'lucide-react';

type Workspace = {
    id: string;
    title: string;
    image: string;
    description: string;
    peopleRange: string;
    price: string;
};

const WORKSPACES: Workspace[] = [
    {
        id: 'tvm-tech-park',
        title: 'Trivandrum Tech Park',
        image: '/images/thumb-1.jpg',
        description:
            'Experience privacy and productivity in our fully furnished, secure Private Office. Tailored for professionals, these secluded offices provide the ideal setting for focused work whether for office workers or freelancers.',
        peopleRange: '1 - 4 Persons',
        price: 'From $699 /month',
    },
    {
        id: 'tvm-boardroom',
        title: 'Trivandrum Tech Park',
        image: '/images/thumb-2.png',
        description:
            'Experience privacy and productivity in our fully furnished, secure Private Office. Tailored for professionals, these secluded offices provide the ideal setting for focused work whether for office workers or freelancers.',
        peopleRange: '1 - 4 Persons',
        price: 'From $699 /month',
    },
    {
        id: 'tvm',
        title: 'Trivandrum Tech Park',
        image: '/images/thumb-2.png',
        description:
            'Experience privacy and productivity in our fully furnished, secure Private Office. Tailored for professionals, these secluded offices provide the ideal setting for focused work whether for office workers or freelancers.',
        peopleRange: '1 - 4 Persons',
        price: 'From $699 /month',
    },
];

const WorkspaceCard = ({ workspace }: { workspace: Workspace }) => {
    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 md:border-0">
            <div className="relative">
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={workspace.image}
                        alt={workspace.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="absolute bottom-0 left-0">
                    <div className="flex items-center justify-between gap-4 rounded-tr-xl bg-primary-100/90 px-4 py-2 backdrop-blur">
                        <h3 className="text-base font-semibold md:text-sm">{workspace.title}</h3>
                        <button
                            aria-label="View workspace"
                            className="grid size-6 place-items-center rounded-full bg-black text-white hover:bg-gray-100"
                        >
                            <ArrowRight size={16} className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-4 p-5 md:p-0 md:py-2">
                <p className="text-sm text-gray-700 line-clamp-3 lg:line-clamp-none col-span-3">
                    {workspace.description}
                </p>
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-between text-sm">
                    <div className="flex items-center gap-2 gap-y-4 text-gray-800 text-xs md:text-sm">
                        <Users size={16} />
                        <span>{workspace.peopleRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-800">
                        <DollarSign size={16} />
                        <span>{workspace.price}</span>
                    </div>
                    <button className="rounded-full bg-primary-100 px-3 py-1.5 text-gray-900 hover:bg-primary-200">
                        Get quote
                    </button>
                </div>
            </div>
        </article>
    );
};

const WorkspaceListing = () => {
    return (
        <section className="w-full">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {WORKSPACES.map((ws) => (
                    <WorkspaceCard key={ws.id} workspace={ws} />
                ))}
                {WORKSPACES.map((ws) => (
                    <WorkspaceCard key={ws.id} workspace={ws} />
                ))}
                {WORKSPACES.map((ws) => (
                    <WorkspaceCard key={ws.id} workspace={ws} />
                ))}
            </div>
        </section>
    );
};

export default WorkspaceListing;

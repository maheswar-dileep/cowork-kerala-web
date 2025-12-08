import React from 'react';
import { Metadata } from 'next';
import HeroSection from './Section/HeroSection';
import WorkspaceListing from './Section/WorkspaceListing';
import FilterSection from './Section/FilterSection';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';
import { getLocations } from '@/services/locations';
import { getWorkspaces } from '@/services/workspace.service';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const city = typeof searchParams.city === 'string' ? searchParams.city : undefined;
    const title = city
        ? `Coworking Spaces in ${city} | CoWork Kerala`
        : 'Find Your Perfect Workspace | CoWork Kerala';
    const description = city
        ? `Discover the best coworking spaces in ${city}. Flexible desks, private offices, and meeting rooms available.`
        : 'Explore top-rated coworking spaces across Kerala. Book hot desks, dedicated desks, and private offices.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        },
    };
}

const CoWorkingSpace = async ({ searchParams }: Props) => {
    const city = typeof searchParams.city === 'string' ? searchParams.city : undefined;

    const [locations, workspacesResponse] = await Promise.all([
        getLocations(),
        getWorkspaces({ city }),
    ]);

    const workspaces = workspacesResponse?.data || [];

    return (
        <Fixedw className="container mx-auto md:px-8 flex flex-col gap-12">
            <Header />
            <HeroSection />
            <FilterSection locations={locations} />
            <WorkspaceListing workspaces={workspaces} />
            <Footer />
        </Fixedw>
    );
};

export default CoWorkingSpace;

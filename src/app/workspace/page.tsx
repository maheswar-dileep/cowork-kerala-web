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
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { city } = await searchParams;
    const title =
        typeof city === 'string' && city
            ? `Coworking Spaces in ${city} | CoWork Kerala`
            : 'Find Your Perfect Workspace | CoWork Kerala';
    const description =
        typeof city === 'string' && city
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
    const { city } = await searchParams;
    const cityStr = typeof city === 'string' ? city : undefined;

    const [locations, workspacesResponse] = await Promise.all([
        getLocations(),
        getWorkspaces({ city: cityStr }),
    ]);

    const workspaces = workspacesResponse?.data || [];

    return (
        <Fixedw className="container mx-auto md:px-8 flex flex-col gap-12">
            <Header />
            <HeroSection />
            <FilterSection locations={locations} />
            <WorkspaceListing workspaces={workspaces} locations={locations} />
            <Footer />
        </Fixedw>
    );
};

export default CoWorkingSpace;

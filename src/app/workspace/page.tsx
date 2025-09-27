import React from 'react';
import HeroSection from './Section/HeroSection';
import WorkspaceListing from './Section/WorkspaceListing';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const CoWorkingSpace = () => {
    return (
        <main className="container mx-auto md:px-8 flex flex-col gap-12">
            <Header />
            <HeroSection />
            <WorkspaceListing />
            <Footer />
        </main>
    );
};

export default CoWorkingSpace;

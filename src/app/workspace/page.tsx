import React from 'react';
import HeroSection from './Section/HeroSection';
import WorkspaceListing from './Section/WorkspaceListing';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';

const CoWorkingSpace = () => {
    return (
        <Fixedw className="container mx-auto md:px-8 flex flex-col gap-12">
            <Header />
            <HeroSection />
            <WorkspaceListing />
            <Footer />
        </Fixedw>
    );
};

export default CoWorkingSpace;

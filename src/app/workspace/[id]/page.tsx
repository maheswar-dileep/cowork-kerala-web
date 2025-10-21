import React from 'react';
import CtaSection from './Section/CtaSection';
import Footer from '@/components/ui/Footer';
import GallerySection from './Section/GallerySection';
import Header from '@/components/ui/Header';
import OtherLocationsSection from './Section/OtherLocationsSection';
import OverviewSection from './Section/OverviewSection';
import Fixedw from '@/components/ui/Fixedw';

const page = () => {
    return (
        <>
            <Fixedw className="container mx-auto md:px-8 flex flex-col md:gap-12 gap-4">
                <Header />
                <GallerySection />
                <div className="mt-10" />
                <OverviewSection />
                <div className="mt-10" />
                <CtaSection />
                <div className="mt-10" />
                <OtherLocationsSection />
                <div className="mt-10" />
            </Fixedw>
            <Footer />
        </>
    );
};

export default page;

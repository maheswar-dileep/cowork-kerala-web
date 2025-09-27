import React from 'react';
import CtaSection from './Section/CtaSection';
import Footer from '@/components/ui/Footer';
import GallerySection from './Section/GallerySection';
import Header from '@/components/ui/Header';
import OtherLocationsSection from './Section/OtherLocationsSection';
import OverviewSection from './Section/OverviewSection';

const page = () => {
    return (
        <>
            <Header />
            <GallerySection />
            <div className="mt-10" />
            <OverviewSection />
            <div className="mt-10" />
            <CtaSection />
            <div className="mt-10" />
            <OtherLocationsSection />
            <div className="mt-10" />
            <Footer />
        </>
    );
};

export default page;

import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';
import HeroSection from './Section/HeroSection';
import ContactSection from './Section/ContactSection';
import GallerySection from './Section/GallerySection';
import SolutionsSection from './Section/SolutionsSection';

const PrivateOfficePage = () => {
    return (
        <>
            <Fixedw className="container mx-auto md:px-8 flex flex-col">
                <Header />
            </Fixedw>
            <HeroSection />
            <Fixedw className="container mx-auto md:px-8 flex flex-col mb-12 md:mb-24">
                <ContactSection />
                <GallerySection />
            </Fixedw>
            <SolutionsSection />
            <div className="mt-12 md:mt-24">
                <Footer />
            </div>
        </>
    );
};

export default PrivateOfficePage;

import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';
import HeroSection from './Section/HeroSection';
import ServicesSection from './Section/ServicesSection';
import ContactSection from './Section/ContactSection';
import FeatureSection from './Section/FeatureSection';

type Props = {};

const VirtualOffice = (props: Props) => {
    return (
        <>
            <Fixedw className="container mx-auto md:px-8 flex flex-col mb-12 md:mb-24">
                <Header />
                <HeroSection />
            </Fixedw>
            <ServicesSection />
            <Fixedw className="container mx-auto md:px-8 flex flex-col mb-12 md:mb-24">
                <ContactSection />
            </Fixedw>
            <FeatureSection />
            <div className="mt-12 md:mt-24">
                <Footer />
            </div>
        </>
    );
};

export default VirtualOffice;

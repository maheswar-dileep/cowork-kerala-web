import Header from '@/components/ui/Header';
import React from 'react';
import Fixedw from '@/components/ui/Fixedw';
import Hero from './Section/HeroSection';
import ContactSection from './Section/ContactSection';
import BenefitsSection from './Section/BenefitsSection';
import Footer from '@/components/ui/Footer';

const VirtualOffice = () => {
    return (
        <>
            <Fixedw className="container mx-auto md:px-8 flex flex-col gap-12 mb-12 md:mb-24">
                <Header />
                <Hero />
                <ContactSection />
                <BenefitsSection />
            </Fixedw>
            <Footer />
        </>
    );
};

export default VirtualOffice;

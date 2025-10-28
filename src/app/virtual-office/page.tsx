import Header from '@/components/ui/Header';
import React from 'react';
import HeroSection from './Section/HeroSection';
import VirtualOfficeServices from './Section/VirtualOfficeServices';
import ContactForm from './Section/ContactForm';
import ProfessionalPresence from './Section/ProfessionalPresence';
import Fixedw from '@/components/ui/Fixedw';

const VirtualOffice = () => {
    return (
            <Fixedw className="container mx-auto md:px-8 flex flex-col gap-12">
                <Header />
                <HeroSection />
                <VirtualOfficeServices />
                <ContactForm />
                <ProfessionalPresence />
            </Fixedw>
    );
};

export default VirtualOffice;

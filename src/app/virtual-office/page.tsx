import Header from '@/components/ui/Header';
import React from 'react';
import HeroSection from './Section/HeroSection';
import VirtualOfficeServices from './Section/VirtualOfficeServices';
import ContactForm from './Section/ContactForm';
import ProfessionalPresence from './Section/ProfessionalPresence';
import Fixedw from '@/components/ui/Fixedw';

const VirtualOffice = () => {
    return (
        <div>
            <Header />
            <Fixedw>
                <HeroSection />
                <VirtualOfficeServices />
                <ContactForm />
                <ProfessionalPresence />
            </Fixedw>
        </div>
    );
};

export default VirtualOffice;

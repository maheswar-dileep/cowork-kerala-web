import Header from '@/components/ui/Header';
import React from 'react';
import HeroSection from './Section/HeroSection';
import VirtualOfficeServices from './Section/VirtualOfficeServices';
import ContactForm from './Section/ContactForm';
import ProfessionalPresence from './Section/ProfessionalPresence';

const VirtualOffice = () => {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <Header />
            <div className="mt-8 space-y-12">
                <HeroSection />
                <VirtualOfficeServices />
                <ContactForm />
                <ProfessionalPresence />
            </div>
        </div>
    );
};

export default VirtualOffice;

import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';
import HeroSection from './Section/HeroSection';
import AdaptSection from './Section/AdaptSection';
import FeaturedSection from './Section/FeaturedSection';
import LocationsSection from '../(landing)/Section/LocationsSection';
import EnquirySection from './Section/EnquirySection';
import WhyChooseSection from './Section/WhyChooseSection';
import DiscoverSection from './Section/DiscoverSection';
import WelcomeSection from './Section/WelcomeSection';
import { getLocations } from '@/services/locations';

const LandingPage = async () => {
    const locations = await getLocations();

    return (
        <>
            <Fixedw className="container mx-auto md:px-8 flex flex-col">
                <Header />
                <HeroSection locations={locations} />
                <AdaptSection />
                <FeaturedSection />
                <LocationsSection locations={locations} />
                <EnquirySection />
                <WhyChooseSection />
                <DiscoverSection />
            </Fixedw>
            <WelcomeSection />
            <div className="mt-12 md:mt-24">
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;

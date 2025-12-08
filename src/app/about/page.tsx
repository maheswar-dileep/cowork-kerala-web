import Header from '@/components/ui/Header';
import Fixedw from '@/components/ui/Fixedw';
import Footer from '@/components/ui/Footer';
import HeroSection from './Section/HeroSection';
import AboutIntroSection from './Section/AboutIntroSection';
import OurValuesSection from './Section/OurValuesSection';
import GlimpseInsideSection from './Section/GlimpseInsideSection';
import TeamSection from './Section/TeamSection';
import TrustedCompaniesSection from './Section/TrustedCompaniesSection';

const VirtualOffice = () => {
    return (
        <>
            <Fixedw className="container mx-auto md:px-8 flex flex-col gap-12 mb-12 md:mb-24">
                <Header />
                <HeroSection />
                <AboutIntroSection />
                <OurValuesSection />
                <GlimpseInsideSection />
                <TeamSection />
                <TrustedCompaniesSection />
            </Fixedw>
            <Footer />
        </>
    );
};

export default VirtualOffice;

import Header from '@/components/ui/Header';
import Hero from './Section/Hero';
import Featured from './Section/Featured';
import WhyChoose from './Section/WhyChoose';
import HeroCTA from './Section/HeroCTA';
import ContactForm from './Section/ContactForm';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';
import SpaceAdapts from './Section/SpaceAdapts';
import LocationsSection from './Section/LocationsSection';
import { getLocations } from '@/services/locations';
import PopularLocations from './Section/PopularLocations';

const Page = async () => {
    const locations = await getLocations();

    return (
        <div className="min-h-screen">
            <Fixedw>
                <Header />
                <Hero locations={locations} />
                <SpaceAdapts />
                <Featured />
                <LocationsSection locations={locations} />
            </Fixedw>
            <ContactForm locations={locations} />
            <Fixedw>
                <WhyChoose />
            </Fixedw>
            <HeroCTA locations={locations} />
            <Footer />
        </div>
    );
};

export default Page;

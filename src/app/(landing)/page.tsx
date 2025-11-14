import Header from '@/components/ui/Header';
import Hero from './Section/Hero';
import Featured from './Section/Featured';
import WhyChoose from './Section/WhyChoose';
import HeroCTA from './Section/HeroCTA';
import ContactForm from './Section/ContactForm';
import Footer from '@/components/ui/Footer';
import Fixedw from '@/components/ui/Fixedw';
import PopularLocations from './Section/PopularLocations';
import SpaceAdapts from './Section/SpaceAdapts';

const Page = () => {
    return (
        <div className="min-h-screen">
            <Fixedw>
                <Header />
            </Fixedw>
            <Fixedw>
                <Hero />
            </Fixedw>
            <Fixedw>
                <SpaceAdapts />
            </Fixedw>
            <Fixedw>
                <Featured />
            </Fixedw>
            <Fixedw>
                <PopularLocations />
            </Fixedw>
            <ContactForm />
            <Fixedw>
                <WhyChoose />
            </Fixedw>
            <HeroCTA />
            <Footer />
        </div>
    );
};

export default Page;

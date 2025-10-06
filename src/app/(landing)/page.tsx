import Header from '@/components/ui/Header';
import Hero from './Section/Hero';
import Featured from './Section/Featured';
import WhyChoose from './Section/WhyChoose';
import HeroCTA from './Section/HeroCTA';
import ContactForm from './Section/ContactForm';
import Footer from '@/components/ui/Footer';

const Page = () => {
    return (
        <div className="grid grid-cols-1 md:gap-12">
            <Header />
            <Hero />
            <Featured />
            <ContactForm />
            <WhyChoose />
            <HeroCTA />
            <Footer />
        </div>
    );
};

export default Page;

import Header from '@/components/ui/Header';
import Hero from './Section/Hero';
import Featured from './Section/Featured';

const Page = () => {
    return (
        <div className="grid grid-cols-1 md:gap-12">
            <Header />
            <Hero />
            <Featured />
        </div>
    );
};

export default Page;

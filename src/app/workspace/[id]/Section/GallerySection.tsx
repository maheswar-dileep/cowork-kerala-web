import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';

const GallerySection = () => {
    return (
        <section>
            <div className="md:mt-12 flex flex-col gap-2 relative">
                <div className="rounded-full bg-primary-50 size-12 md:size-18 absolute bottom-8 -left-4 md:bottom-12 md:-left-8 -z-20"></div>
                <h2 className="text-2xl md:text-5xl font-medium">Trivandrum Technopark</h2>
                <div className="flex gap-2 items-center">
                    <IoLocationOutline className="text-sm md:text-lg" />
                    <span className="text-sm md:text-lg text-slate-700">
                        Kazhakootam , Trivandrum
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-12 w-full md:mt-8 mt-4 gap-4 md:gap-6">
                <div className="col-span-12 md:col-span-7">
                    <Image
                        src="/images/thumb-1.png"
                        alt="Trivandrum Technopark"
                        width={500}
                        height={200}
                        className="w-full h-fit rounded-xl md:rounded-4xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-5 grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-6">
                    {Array(4)
                        .fill(null)
                        .map((_, idx) => (
                            <Image
                                src="/images/thumb-1.png"
                                alt="Trivandrum Technopark"
                                width={500}
                                height={200}
                                key={idx}
                                className="w-full h-24 md:h-72 aspect-square md:rounded-4xl rounded-xl"
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;

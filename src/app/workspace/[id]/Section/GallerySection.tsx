import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';
import { Workspace } from '@/services/workspace.service';

interface GallerySectionProps {
    workspace: Workspace;
}

const GallerySection = ({ workspace }: GallerySectionProps) => {
    const mainImage = workspace.images?.[0] || '/images/thumb-1.png';
    const galleryImages = workspace.images?.slice(1, 5) || [];

    return (
        <section>
            <div className="md:mt-12 flex flex-col gap-2 relative">
                <div className="rounded-full bg-primary-50 size-12 md:size-18 absolute bottom-8 -left-4 md:bottom-12 md:-left-8 -z-20"></div>
                <h1 className="text-2xl md:text-5xl font-medium">{workspace.spaceName}</h1>
                <div className="flex gap-2 items-center">
                    <IoLocationOutline className="text-sm md:text-lg" />
                    <span className="text-sm md:text-lg text-slate-700">
                        {workspace.location?.address
                            ? `${workspace.location.address}, ${workspace.city.name}`
                            : workspace.city.name}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-12 w-full md:mt-8 mt-4 gap-4 md:gap-6">
                <div className="col-span-12 md:col-span-7">
                    <Image
                        src={mainImage}
                        alt={workspace.spaceName}
                        width={800}
                        height={500}
                        className="w-full h-fit rounded-xl md:rounded-4xl object-cover"
                        priority
                    />
                </div>
                <div className="col-span-12 md:col-span-5 grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-6">
                    {galleryImages.length > 0
                        ? galleryImages.map((img, idx) => (
                              <Image
                                  src={img}
                                  alt={`${workspace.spaceName} - Image ${idx + 2}`}
                                  width={500}
                                  height={200}
                                  key={idx}
                                  className="w-full h-24 md:h-72 object-cover md:rounded-4xl rounded-xl"
                              />
                          ))
                        : Array(4)
                              .fill(null)
                              .map((_, idx) => (
                                  <Image
                                      src="/images/thumb-1.png"
                                      alt={`${workspace.spaceName} placeholder`}
                                      width={500}
                                      height={200}
                                      key={idx}
                                      className="w-full h-24 md:h-72 object-cover md:rounded-4xl rounded-xl"
                                  />
                              ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;

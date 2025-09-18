import LocationCircle from '@/components/atomic/LocationCircle';
import SelectInput from '@/components/atomic/SelectInput';
import React from 'react';

const Hero = () => {
    return (
        <div className="grid md:grid-cols-3 md:mt-12 w-full gap-12">
            <div className="col-span-2 md:w-full flex flex-col gap-12">
                <h3 className="text-6xl font-semibold leading-20">
                    The Most Exciting Square Meters In Town
                </h3>
                <p className="text-2xl leading-12 font-medium w-full">
                    Discover premium coworking spaces and virtual offices across God{`'`}s Own
                    Country. Professional workspaces in Kochi, Trivandrum, Calicut , Thrissur and
                    more.
                </p>
            </div>
            <div className="w-full md:flex justify-start">
                <div className="w-full h-full bg-[#EBFFD8] rounded-4xl"></div>
            </div>
            <div className="flex flex-col gap-4 items-center col-span-2 w-full md:w-3/4">
                <div className="flex w-full gap-6 ms-12">
                    <SelectInput
                        placeholder="Looking For"
                        options={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />

                    <SelectInput
                        placeholder="Looking For"
                        options={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </div>
                <div className="gap-4 grid ms grid-cols-6 items-start">
                    {Array(12)
                        .fill(0)
                        .map((_, index) => (
                            <LocationCircle key={index} location={`Location ${index + 1}`} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;


import Image from 'next/image';
import React from 'react';

type Props = {
    location: string;
    imageUrl?: string;
};

const LocationCircle = ({ location, imageUrl }: Props) => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="rounded-full size-28 bg-teal-200">
                {imageUrl && <Image src={imageUrl} alt={location} className="rounded-full" />}
            </div>
            <p>{location ?? 'Unknown Location'}</p>
        </div>
    );
};

export default LocationCircle;

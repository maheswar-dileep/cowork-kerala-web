import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Fixedw = ({ children }: Props) => {
    return <div className="px-6 md:px-0 md:max-w-[85vw] mx-auto">{children}</div>;
};

export default Fixedw;

import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
    options: Array<{ value: string; label: string }>;
    className?: string;
    placeholder?: string;
};

const SelectInput = (props: Props) => {
    return (
        <select
            className={twMerge(
                'w-48 h-12 p-2 px-4 rounded-lg bg-teal-300 text-lg flex justify-center items-center',
                props.className
            )}
            defaultValue=""
        >
            {props.placeholder && (
                <option value="" disabled>
                    {props.placeholder}
                </option>
            )}
            {props.options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;

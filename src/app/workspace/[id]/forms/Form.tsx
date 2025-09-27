import React from 'react';

const Form = () => {
    return (
        <div className="md:col-span-2">
            <div className="rounded-3xl bg-primary-100 p-5 md:p-6">
                <h4 className="text-lg font-semibold">Let us find your perfect Property</h4>
                <p className="text-gray-700">Connect to a Cowork Expert now</p>

                <form className="mt-4 space-y-3">
                    <input
                        className="h-10 w-full rounded-lg bg-white px-3 outline-none"
                        placeholder="Name*"
                    />
                    <input
                        className="h-10 w-full rounded-lg bg-white px-3 outline-none"
                        placeholder="Email*"
                    />
                    <div className="flex gap-2">
                        <input
                            className="h-10 w-20 rounded-lg bg-white px-3 outline-none"
                            placeholder="+91"
                        />
                        <input
                            className="h-10 w-full rounded-lg bg-white px-3 outline-none"
                            placeholder="Phone*"
                        />
                    </div>
                    <select className="h-10 w-full rounded-lg bg-white px-3 outline-none">
                        <option>Type of Space</option>
                    </select>
                    <select className="h-10 w-full rounded-lg bg-white px-3 outline-none">
                        <option>Select City</option>
                    </select>
                    <button
                        type="button"
                        className="mt-2 w-full rounded-lg bg-primary-400 py-2 text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;

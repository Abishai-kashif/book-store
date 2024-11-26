"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.log(error.message);
    }, [reset]);
    return (
        <main className="h-screen w-screen bg-black-100 flex items-center justify-center flex-col tracking-wide">
            <h1 className="text-4xl font-bold text-red-500 text-center">
                Something Went Wrong
            </h1>

            <button
                className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-700 text-white text-xl font-semibold mt-8"
                onClick={() => reset()}
            >
                Try again
            </button>
        </main>
    );
};

export default Error;

"use client";

const Error = ({ error, reset }: { error: any; reset: () => void }) => {
    return (
        <main className="h-screen w-screen bg-black-100 flex items-center justify-center flex-col tracking-wide">
            <h1 className="text-4xl font-bold text-teal text-center">
                Something Went Wrong
            </h1>

            <button
                className="px-6 py-3 rounded-full bg-teal hover:bg-teal-dark text-white text-xl font-semibold mt-8"
                onClick={() => reset()}
            >
                Try again
            </button>
        </main>
    );
};

export default Error;

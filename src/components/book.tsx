import Link from "next/link";
import Image from "next/image";

export interface IProps {
    name: string;
    author: string;
    price: number;
    available: boolean;
}

const Book = ({ name, author, price, available }: IProps) => {
    return (
        <div className="flex items-center justify-center flex-col lg:flex-row  gap-8 py-5 px-5 sm:px-20 overflow-x-hidden">
            {/* book image */}
            <div className="w-full lg:w-1/2">
                <section className="lg:hidden border-white border-b py-5 text-center lg:text-left">
                    <h1 className="text-4xl font-semibold text-white font-serif">
                        {name}
                    </h1>
                    <h4 className="text-teal">by {author}</h4>
                </section>
                <Image
                    src={"/book.jpeg"}
                    alt="A Book"
                    height={500}
                    width={500}
                    className="object-contain w-[200px] h-[250px] sm:w-[400px] sm:h-[500px]  mx-auto"
                />
            </div>

            {/* book details */}
            <div className="w-full lg:w-1/2">
                <div>
                    <section className="hidden lg:block border-white border-b py-5">
                        <h1 className="text-4xl font-semibold text-white font-serif">
                            {name}
                        </h1>
                        <h4 className="text-teal">by {author}</h4>
                    </section>
                    <section className="border-white border-b py-5">
                        <h4 className="text-lg font-medium text-white mb-2">
                            price
                        </h4>
                        <div className="flex flex-wrap items-end gap-2">
                            <ins className="text-white text-[2.10rem] leading-none font-semibold no-underline">
                                ${price}
                            </ins>
                            <del className="text-white/80 ml-3">
                                ${price * 2}
                            </del>
                            |<span className="text-red-500/80">Save 50%</span>
                        </div>
                    </section>
                    <section className="py-5">
                        {available ? (
                            <h4 className="text-lg text-end font-medium text-green-500 pr-5">
                                in stock
                            </h4>
                        ) : (
                            <h4 className="text-lg text-end font-medium text-red-500 pr-5">
                                out of stock
                            </h4>
                        )}
                    </section>
                </div>

                <button
                    className={`mt-10 py-3 w-full bg-teal text-white font-semibold text-lg rounded-md hover:bg-teal-dark transition-all ${
                        available ? "" : "cursor-not-allowed "
                    }`}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Book;

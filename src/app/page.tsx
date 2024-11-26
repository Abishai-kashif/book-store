import Link from "next/link";
import { IBook } from "./[id]/page";
import { getBooks } from "@/lib/fetches";

export default async function Home() {
    const books = await getBooks();
    return (
        <main className="min-h-screen w-screen bg-black-100 px-10 py-20 overflow-x-hidden">
            <div className="mb-20 w-fit mx-auto text-center">
                {/* text */}
                <h1 className="text-5xl font-bold  text-teal mb-1">Books</h1>

                {/* underline */}
                <div className="mx-auto h-1 bg-teal-dark rounded-full" />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center ">
                {books.map((book) => {
                    return (
                        <Link
                            key={book.id}
                            href={`/${book.id}`}
                            className="w-full h-full"
                        >
                            <li className="text-white text-[22px] font-semibold tracking-wide bg-white/5 border border-white/15 rounded-full p-5 text-center hover:scale-[1.03] transition-all">
                                {book.name}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </main>
    );
}

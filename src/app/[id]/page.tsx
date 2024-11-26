import Book from "@/components/book";
import { getBook } from "@/lib/fetches";
import Link from "next/link";

export interface IBook {
    id: number;
    name: string;
    author: string;
    type: string;
    price: number;
    "current-stock": number;
    available: boolean;
}

const Page = async ({
    params,
}: {
    params: Promise<{
        id: string;
    }>;
}) => {
    const { id } = await params;

    const book: IBook = await getBook(id);

    return (
        <main className="min-h-screen w-screen bg-black-100 lg:px-10 py-28 overflow-x-hidden">
            <Link
                href={"/"}
                className="absolute top-5 left-5 hover:bg-white/5 p-2 rounded-md"
            >
                &#8601; Home
            </Link>
            <Book {...book} />
        </main>
    );
};

export default Page;

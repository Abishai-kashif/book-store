import { IBook } from "@/app/[id]/page";
import BookModal from "@/components/book-modal";
import { getBook } from "@/lib/fetches";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const book: IBook = await getBook(id);

    return (
        <main className="min-h-screen w-screen overflow-x-hidden absolute top-0 transition-all">
            <BookModal {...book} />
        </main>
    );
}

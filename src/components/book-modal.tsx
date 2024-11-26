"use client";

import Book from "./book";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { IProps } from "@/components/book";

const BookModal = (book: IProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <dialog
            className="rounded p-4  border border-teal z-50 backdrop:bg-black-100/50 bg-black-100"
            ref={dialogRef}
            onClose={() => router.back()}
        >
            <button
                className="absolute top-2 right-5 text-white text-4xl outline-none border-none"
                onClick={() => dialogRef.current?.close()}
            >
                &times;
            </button>
            <Book {...book} />
        </dialog>
    );
};

export default BookModal;

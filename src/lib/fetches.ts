import { IBook } from "@/app/[id]/page";

const url = "https://simple-books-api.glitch.me/books";

export async function getBooks() {
	const res = await fetch(url);
	const books: IBook[] = await res.json();

	return books;
}

export async function getBook(id: string) {
	const bookUrl = url + `/${id}`;

	const res = await fetch(bookUrl);
	const book: IBook = await res.json();

	return book;
}

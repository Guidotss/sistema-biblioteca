import { getBooks } from '../../api/books.api'; 

export const getAllBooks = async() => {
    const books = await getBooks();
    return books;
}
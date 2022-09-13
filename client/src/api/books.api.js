import axios from 'axios';


export const getBooks = async () => {
    const books = await axios.get('http://localhost:8080');
    return books.data;
}

export const getBookById = async( id ) => {
    const book = await axios.get(`http://localhost:8080/${id}`);
    return book.data;
}
import axios from 'axios';

export const getAllBooks = async() =>{
    const books = await axios.get('http://localhost:8080');
    return books.data;
}
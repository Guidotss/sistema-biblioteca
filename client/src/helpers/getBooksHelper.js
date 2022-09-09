import { getAllBooks,getBookByAuthor } from '../api/books.api'; 


export const getBooks = async (author) =>{
    if(JSON.stringify(author) !== "{}"){
        const books = await getBookByAuthor(author);
        return books;
    }else{
        const books = await getAllBooks();
        return books;
    }
    
}
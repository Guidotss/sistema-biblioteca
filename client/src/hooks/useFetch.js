import { useState, useEffect } from "react";
import { getBooks } from "../helpers/getBooksHelper"; 

export const useFetch = () =>{
    const [data, setData] = useState({}); 
    const [bookAuthor,setBookAuthor] = useState({});
    const [loading, setLoading] = useState(true);
    const [isFormSend, setIsFormSend] = useState(false);

    const getAllBooks = async () =>{
        const books = await getBooks(bookAuthor);
        setData(books);
        setLoading(false);
    }
    useEffect(() => {
        getAllBooks();
        setLoading(true);
        setIsFormSend(false);
    },[isFormSend]);
    
    useEffect(() =>{
        getAllBooks();
        setLoading(true);
        setIsFormSend(false);
    },[]); 


    return {
        data,
        loading,
        isFormSend,
        setBookAuthor,
        setIsFormSend,
    }
}
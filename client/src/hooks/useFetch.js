import { useState, useEffect } from "react";
import { getAllBooks } from "../api/books.api"

export const useFetch = () =>{
    const [data, setData] = useState({});   
    const [loading, setLoading] = useState(true);

    const getBooks = async () =>{
        const books = await getAllBooks();
        setData(books);
        setLoading(false);
    }

    useEffect(() =>{
        getBooks();
        setLoading(false);
    },[]); 


    return {
        data,
        loading
    }
}
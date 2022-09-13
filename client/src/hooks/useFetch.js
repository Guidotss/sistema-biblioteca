import { useState,useEffect } from 'react'; 
import { getAllBooks,BookById } from '../book/index';

export const useFetch = () => {
    const [data,setData] = useState(); 
    const [loading,setLoading] = useState(true);

    const getBooks = async () => {
        const books = await getAllBooks();
        setData(books);
        setLoading(false);
    }

    useEffect(() => {
        getBooks();
        setLoading(true);
    },[])

    return {
        loading,
        data
    }
}
import { useEffect } from "react";
import { BooksContext } from "./BooksContext"
import { useFetch } from "../hooks/barrel"


export const BooksProvider = ({ children }) => {
    const { data,loading,isFormSend } = useFetch();
    
    useEffect(() => {
        console.log(data);
        console.log(isFormSend);
    },[isFormSend]);

    return (    
        <BooksContext.Provider value={{ data,loading }}>
            {children}
        </BooksContext.Provider>
    )
}
import { BooksContext } from "./BooksContext"
import { useFetch } from "../hooks/barrel"

export const BooksProvider = ({ children }) => {
    const { data,loading } = useFetch(); 
    return(
        <BooksContext.Provider value={{ data,loading }}>
            {children}
        </BooksContext.Provider>
    )
}
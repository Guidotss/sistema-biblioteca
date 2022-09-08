import { useContext } from "react"
import { BooksContext } from "../../context/BooksContext"
import { Books } from "./Books"

export const BookGrid = () => {
    const { loading } = useContext( BooksContext )  
    return(
        <Books />
    )
}

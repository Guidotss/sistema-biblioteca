import { useContext } from "react"
import { BooksContext } from "../../context/BooksContext"
import { Books } from "./Books"
import "./books.css"

export const BookGrid = () => {
    const { loading } = useContext( BooksContext )  
    return(
        <section className="booksGrid">
            {
                loading
                ? <h1>Loading...</h1>
                : <Books />
            }
        </section>
    )
}

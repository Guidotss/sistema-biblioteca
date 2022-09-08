import { useContext } from "react"
import { BooksContext } from "../../context/BooksContext"
import { BookItem } from "./BookItem"
import "./books.css"


export const Books = () => {
    const { data } = useContext( BooksContext )
    if(data.length == undefined || data.length == 0) return;

  return (
    <div className="books">
        {
            data.map(book => {
                return(
                    <BookItem data={ book } key={ book._id }/>
                )
            })
        }
    </div>
  ) 
}
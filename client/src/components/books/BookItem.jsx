import { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'
import "./booksItem.css"

export const BookItem = ({ data }) => {

  if(data.length == undefined || data.length == 0) return;
  
  return(
     <div className="card">
          <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{data.author}</h6>
              <p className="card-text">{data.description}</p>
          </div>
      </div> 
  )
}
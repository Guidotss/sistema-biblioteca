import { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'
import "./books.css"

export const BookItem = ({ data }) => {
  return(
    <div className='card'>
      <figure>
        <img src={data.image} alt="" />
      </figure>
      <div className='card-body'>
        <h2>{data.title}</h2>
        <h3>{data.author}</h3>
        
      </div>
    </div>
  )
}

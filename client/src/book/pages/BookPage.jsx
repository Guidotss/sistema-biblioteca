import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { BookById } from '../helpers/index'

export const BookPage = () => {
  const { bookId } = useParams();
  const book = BookById(bookId);
  if(book == undefined)return; 

  const {title,image,author,description} = book;
  return(
    <div className='row mt-5'>
      <div className='col-4'>
          <img className='img-thumbnail' src={image} alt={`${title}.jpg`} />
      </div>
      <div className='col-8'>
        <h3 className>{title}</h3>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
                <b>Author:</b> {author}
            </li>
            <li className='list-group-item'>
                <b>Description:</b> {description}
            </li>
        </ul>
      </div>
    </div>
  )
}
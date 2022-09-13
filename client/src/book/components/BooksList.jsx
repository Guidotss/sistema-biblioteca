import { useFetch } from '../../hooks/index'
import { BookCard } from './BookCard';
import './bookcard.css'

export const BooksList = () => {
    const { data } = useFetch(); 
    if(data === undefined)return; 

  return (
    <div className='row rows-cols-1 row-cols-md-4 g-4 mt-2 d-flex justify-content-center'>
        {
            data.map(book => (
                <BookCard key={ book._id } bookData={ book }/>
            ))
        }
    </div>
  )
}
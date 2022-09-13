import { useLocation } from 'react-router-dom'; 
import queryString from 'query-string';
import { getBooksByTitle } from '../index'
import { BookCard } from '../../book/components/BookCard'
import './searchPage.css'

export const SearchPage = () => {
    const location = useLocation(); 
    const {q=''}  = queryString.parse(location.search);
    const books = getBooksByTitle(q); 
    if(books == undefined)return; 
    
  return (
    <div className='row rows-cols-1 row-cols-lg-2 g-4 mt-2 d-flex justify-content-center'>
        {
            books.map(book => (
                <BookCard key={ book._id } bookData={ book }/>
            ))
        }
    </div>
  )
}
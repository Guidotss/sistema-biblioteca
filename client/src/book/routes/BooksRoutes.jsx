import { Route,Routes } from 'react-router-dom';
import { NavBar,HomePage, } from '../../UI/index'
import { BookPage,BooksPage,SearchPage } from '../index'

export const BooksRoutes = () => {
  return (
    <>
        <NavBar/>
        
        <Routes>
            <Route path='/' element={ <HomePage /> }/> 
            <Route path='/books' element={ <BooksPage /> } />
            <Route path='/books/:bookId' element={ <BookPage /> }/>
            <Route path='/search' element={ <SearchPage /> }/>
        </Routes>
    </> 
  )
}
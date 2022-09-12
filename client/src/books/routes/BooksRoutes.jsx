import  { Route,Routes,Navigate } from 'react-router-dom'; 
import { NavBar } from '../../UI/components/navBar/NavBar'
import { BookPage } from '../pages/BookPage'

export const BooksRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container">
            <Routes>
                <Route path="manga" element={<Navigate to="/manga"/>}/>
                <Route path="terror" element={<Navigate to={"/terror"}/>}/>
                <Route path="search" element={<Navigate to={"/search"}/>}/>
                <Route path="/book/:id" element={<Navigate to={<BookPage/>}/>}/>
            </Routes>
        </div>
    </>
  )
}
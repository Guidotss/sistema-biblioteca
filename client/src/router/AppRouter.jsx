import { Route,Routes } from 'react-router-dom'; 
import { LoginPage } from '../auth/pages/LoginPage';
import { BooksRoutes } from '../book/index'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='login' element={ <LoginPage/> } />
        <Route path='/*' element={ <BooksRoutes/> } />
    </Routes>
  )
}
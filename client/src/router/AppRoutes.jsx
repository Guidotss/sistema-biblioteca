import { Route, Routes } from 'react-router-dom'
import { BooksRoutes } from '../books/routes/BooksRoutes'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<BooksRoutes/>} />
        <Route path="login"  element={<LoginPage/>}/>
    </Routes>
  )
}
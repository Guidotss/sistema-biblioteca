import { BookGrid, NavBar } from "./components/barrel"; 
import { BooksProvider } from "./context/BooksProvider"; 
import { Books } from "./components/books/Books";
import "./app.css"; 

export const App = () => {
  return (
    <BooksProvider>
      <NavBar />
      <BookGrid/>
    </BooksProvider>
  )
}
import { BookGrid, NavBar } from "./components/barrel"; 
import { BooksProvider } from "./context/BooksProvider"; 
import { Books } from "./components/books/Books";
import "./app.css"; 
import { BookItem } from "./components/books/BookItem";

export const App = () => {
  return (
    <BooksProvider>
        <NavBar />
        <Books />
    </BooksProvider>
  )
}
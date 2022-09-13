import { Router } from "express"; 
import { getBooks,getBooksByAuthor,getBooksByAuthorAndTitle,getBooksByTitle,createBook,editBook,deleteBook,getBookById } from "../controllers/books.controllers";

const router  = Router();

router.get("/",getBooks);
router.get("/author/:author",getBooksByAuthor);
router.get("/title/:title",getBooksByTitle);
router.get("/:author/:title",getBooksByAuthorAndTitle);
router.get("/:id",getBookById);
router.post("/",createBook);
router.put("/:id",editBook);
router.delete("/:id",deleteBook);


export default router; 
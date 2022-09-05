import { Router } from "express"; 
import { getAll,getBookById,editBookInfo,deleteBook,createBook,getBookByName } from "../controllers/books.controllers";

const router  = Router();

router.get("/api",async(req,res) =>{
    const {id,name} = req.query;
    if(id && !name){
        const book = await getBookById(String(id));
        res.json(book);
    }else if(name && !id){
        const book = await getBookByName(String(name));
        res.json(book);
    }else if(id && name){
        const book = await getBookById(String(id));
        res.json(book);
    }else if(!id && !name){
        const books = await getAll();
        res.json(books);
    }
}); 

router.post("/api/books",async(req,res) =>{
    const newBook = req.body;
    if(JSON.stringify(newBook) == "{}"){
        res.json({
            message: "Please provide a book"
        });
    }else{
        await createBook(newBook);
    }
}); 

router.put("/api",(req,res) =>{
    
}); 

router.delete("/api",(req,res) =>{
    res.send("Hello World");
}); 


export default router; 
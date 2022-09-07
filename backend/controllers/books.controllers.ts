import { Response,Request } from 'express'
import { Book } from '../services/Book'; 

const book = new Book;


export async function getBooks(req:Request,res:Response):Promise<Response>{
    try{

        const books = await book.getBooks();
        return res.status(200).json(books);

    }catch(err){

        console.log(err);
        return res.status(500).json({message:err});
    }
}

export async function getBooksByAuthor(req:Request,res:Response):Promise<Response>{
    try{

        const { author } = req.params;
        const books = await book.getBooksByAuthor(author);

        if(books === 0){
            return res.status(404).json({message:"No books found"});
        }else{
            return res.status(200).json(books);
        }

    }catch(err){

        console.log(err);
        return res.status(500).json({message:err});
    }
}

export async function getBooksByTitle(req:Request,res:Response):Promise<Response>{
   try{

        const { title } = req.params;
        console.log(title);
        
        const books = await book.getBooksByTitle(title);   
        

        if(books === 0){
            return res.status(404).json({message:"No books found"});
        }else{
            return res.status(200).json(books);
        }

    }catch(err){

        console.log(err);
        return res.status(500).json({message:err});
    }
}

export async function getBooksByAuthorAndTitle(req:Request,res:Response):Promise<Response>{
    try{

        const { author,title } = req.params;
        const books = await book.getBooksByAuthorAndTitle(author,title);

        if(books === 0){
            return res.status(404).json({message:"No books found"});
        }else{
            return res.status(200).json(books);
        }

    }catch(err){

        console.log(err);
        return res.status(500).json({message:err});

    }
}

export async function createBook(req:Request,res:Response):Promise<Response>{
    try{
        const newBook = req.body; 
        if(JSON.stringify(newBook) === "{}"){
            return res.status(400).json({message:"Bad Request"});
        }else{
            const bookCreated = await book.createBook(newBook);
            return res.status(201).json(bookCreated);
        }
    }catch(err){

        console.log(err);
        return res.status(500).json({message:err});

    }
}

export async function editBook(req:Request,res:Response):Promise<Response>{
    try{
        const { id } = req.params;
        const bookEdited = req.body;

        if(JSON.stringify(bookEdited) === "{}"){
            return res.status(400).json({message:"Bad Request"});
        }else{
            const bookUpdated = await book.editBook(id,bookEdited);
            if(bookUpdated === 0){
                return res.status(404).json({message:"Book not found"});
            }else{
                return res.status(200).json(bookUpdated);
            }
        }

    }catch(err){
            
        console.log(err);
        return res.status(500).json({message:err});
    
    }
}

export async function deleteBook(req:Request,res:Response):Promise<Response>{
    try{
        const { id } = req.params;
        const bookDeleted = await book.deleteBook(id);
        if(bookDeleted === 0){
            return res.status(404).json({message:"Book not found"});
        }else{
            return res.status(200).json({message:"Book deleted"});
        }
    }catch(err){
            
            console.log(err);
            return res.status(500).json({message:err});
    
    }
}

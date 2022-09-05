
import booksModel from "../models/books.model";

export async function getAll():Promise<Object | null | undefined>{
    try{
        const books = await booksModel.find(); 
        return books;
    }catch(err){
        console.log(err);
    }
}

export async function getBookById(id:string):Promise <Object |null|undefined>{

    try{
        const book = await booksModel.findById(id); 
        return book;
    }catch(err){
        console.log(err);
    }
} 

export async function getBooksByName(name:string):Promise<Object | null | undefined>{
    try{
        const book = await booksModel.find({name:name});
        return book;
    }catch(err){
        console.log(err);
    }
}

export async function getBooksByAuthor(author:string):Promise<Object | null | undefined>{
    try{
        const books = await booksModel.find({author:author}); 
        return books;
    }catch(err){
        console.log(err);
    }
}


export async function createBook(book:Object):Promise<Object | undefined>{
    try{
        const newBook = await booksModel.create(book);
        return newBook;
    }catch(err){
        console.log(err);
    }
}

export async function editBookInfo(id:string, info:Object):Promise<Object | undefined | null>{
    try{
        const book = await booksModel.findByIdAndUpdate(id, info);
        return book;
    }catch(err){
        console.log(err);
    }
}

export async function deleteBook(id:string):Promise<object | undefined | null>{
    try {
        const book = await booksModel.findByIdAndDelete(id);
        return book;
    } catch (error) {
        console.log(error);
    }
}
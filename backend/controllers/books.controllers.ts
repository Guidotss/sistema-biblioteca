
import booksModel from "../models/books.model";

export async function getAll():Promise<Object | null | undefined>{
    try{
        const books = await booksModel.find(); 
        return books;
    }catch(err){
        console.log(err);
    }
}
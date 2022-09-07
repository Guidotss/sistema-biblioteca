import booksModel from "../models/books.model";

export class Book{
    private model:typeof booksModel;
    constructor(){
        this.model = booksModel;
    }

    public async getBooks():Promise<Object>{
        try{
            const books = await this.model.find();
            return books; 
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }

    public async getBooksByAuthor(author:string):Promise<Object>{
        try{
            const books = await this.model.find({author:author});
            if(books.length === 0){
                return 0; 
            }else{
                return books;
            }
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }
    public async getBooksByTitle(title:string):Promise<Object>{
        try{
            console.log(title);
            
            const books = await this.model.find({title:title});
            if(books.length === 0){
                return 0; 
            }else{
                return books;
            }
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }

    public async getBooksByAuthorAndTitle(author:string,title:string):Promise<Object>{
        try{
            const books = await this.model.find({author:author,title:title});
            if(books.length === 0){
                return 0;
            }else{
                return books;
            }
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }

    public async createBook(book:Object):Promise<Object>{
        try{
            const newBook = await this.model.create(book);
            return newBook;
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }

    public async editBook(id:string,book:Object):Promise<Object | null>{
        try{
            const editBook = await this.model.findByIdAndUpdate(id,book,{new:true});

            if(editBook === null){
                return 0;
            }else{
                return editBook;
            }
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }

    public async deleteBook(id:string):Promise<Object | null>{
        try{
            const deleteBook = await this.model.findByIdAndDelete(id);

            if(deleteBook === null){
                return 0;
            }else{
                return deleteBook;
            }
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }
        
}
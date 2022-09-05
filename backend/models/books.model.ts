import { Schema,model,Document } from "mongoose"; 

interface IBooks extends Document{
    title: string;
    author:string; 
    description: string;
    image: string;
}


const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    }
}); 

const booksModel = model<IBooks>("Books",booksSchema); 
export default booksModel; 
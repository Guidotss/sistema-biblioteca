import express from "express"; 
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import BooksRouter from "./routes/books.routes"
import "./dataBase/connect"
dotenv.config(); 

const app = express();

app.use(express.json()); 
app.use(morgan("dev"));
app.use(cors());
app.use("/",BooksRouter);

const PORT:string|undefined = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


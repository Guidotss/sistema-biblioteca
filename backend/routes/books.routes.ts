import { Router } from "express"; 
import { getAll } from "../controllers/books.controllers";

const router  = Router();

router.get("/api",async(_req,res) =>{
    res.json(await getAll());
}); 

router.post("/api/books",(req,res) =>{
    res.send("Hello World");
}); 

router.post("/api",(req,res) =>{
    res.send("Hello World");
}); 

router.delete("/api",(req,res) =>{
    res.send("Hello World");
}); 


export default router; 
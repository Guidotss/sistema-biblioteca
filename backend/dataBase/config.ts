import dotenv from "dotenv";
dotenv.config();

interface IConfig{
    urlAtlas: string;
    urlLocal: string;
    options: object;
}; 

const Config: IConfig = {
    urlAtlas: `mongodb+srv://Guido:${process.env.DB_Password}@cluster0.tijy1to.mongodb.net/Bibliotecas?retryWrites=true&w=majority`,
    urlLocal: "mongodb://localhost:27017/Biblioteca",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}

export default Config;
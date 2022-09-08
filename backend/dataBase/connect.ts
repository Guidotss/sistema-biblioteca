import mongoose from "mongoose";
import Config from "./config";

export const connectDB = async () => {
    try{
        mongoose.connect(Config.urlAtlas, Config.options)
            .then(() =>{
                console.log("DB Connected");
            })
            .catch(err =>{
                console.log(err);
                process.exit(1);
            })
    }catch(err){
        console.log(err);
        process.exit(1);
    }

}

connectDB();
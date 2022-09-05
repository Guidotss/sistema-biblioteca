"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
const Config = {
    urlAtlas: `mongodb+srv://Guido:${process.env.DB_Password}@cluster0.tijy1to.mongodb.net/Biblioteca?retryWrites=true&w=majority`,
    urlLocal: "mongodb://localhost:27017/Biblioteca",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
};
exports.default = Config;

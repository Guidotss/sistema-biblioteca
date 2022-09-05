"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.editBookInfo = exports.createBook = exports.getBookByName = exports.getBookById = exports.getAll = void 0;
const books_model_1 = __importDefault(require("../models/books.model"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield books_model_1.default.find();
            return books;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getAll = getAll;
function getBookById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_model_1.default.findById(id);
            return book;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getBookById = getBookById;
function getBookByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_model_1.default.findOne({ name: name });
            return book;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getBookByName = getBookByName;
function createBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBook = yield books_model_1.default.create(book);
            return newBook;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createBook = createBook;
function editBookInfo(id, info) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_model_1.default.findByIdAndUpdate(id, info);
            return book;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.editBookInfo = editBookInfo;
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_model_1.default.findByIdAndDelete(id);
            return book;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteBook = deleteBook;

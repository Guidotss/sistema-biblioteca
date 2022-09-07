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
exports.Book = void 0;
const books_model_1 = __importDefault(require("../models/books.model"));
class Book {
    constructor() {
        this.model = books_model_1.default;
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.model.find();
                return books;
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
    getBooksByAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.model.find({ author: author });
                if (books.length === 0) {
                    return 0;
                }
                else {
                    return books;
                }
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
    getBooksByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(title);
                const books = yield this.model.find({ title: title });
                if (books.length === 0) {
                    return 0;
                }
                else {
                    return books;
                }
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
    getBooksByAuthorAndTitle(author, title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.model.find({ author: author, title: title });
                if (books.length === 0) {
                    return 0;
                }
                else {
                    return books;
                }
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = yield this.model.create(book);
                return newBook;
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
    editBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const editBook = yield this.model.findByIdAndUpdate(id, book, { new: true });
                if (editBook === null) {
                    return 0;
                }
                else {
                    return editBook;
                }
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteBook = yield this.model.findByIdAndDelete(id);
                if (deleteBook === null) {
                    return 0;
                }
                else {
                    return deleteBook;
                }
            }
            catch (err) {
                console.log(err);
                throw new Error(`Error: ${err}`);
            }
        });
    }
}
exports.Book = Book;

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.editBook = exports.createBook = exports.getBooksByAuthorAndTitle = exports.getBooksByTitle = exports.getBooksByAuthor = exports.getBooks = void 0;
const Book_1 = require("../services/Book");
const book = new Book_1.Book;
function getBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield book.getBooks();
            return res.status(200).json(books);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.getBooks = getBooks;
function getBooksByAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { author } = req.params;
            const books = yield book.getBooksByAuthor(author);
            if (books === 0) {
                return res.status(404).json({ message: "No books found" });
            }
            else {
                return res.status(200).json(books);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.getBooksByAuthor = getBooksByAuthor;
function getBooksByTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title } = req.params;
            console.log(title);
            const books = yield book.getBooksByTitle(title);
            if (books === 0) {
                return res.status(404).json({ message: "No books found" });
            }
            else {
                return res.status(200).json(books);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.getBooksByTitle = getBooksByTitle;
function getBooksByAuthorAndTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { author, title } = req.params;
            const books = yield book.getBooksByAuthorAndTitle(author, title);
            if (books === 0) {
                return res.status(404).json({ message: "No books found" });
            }
            else {
                return res.status(200).json(books);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.getBooksByAuthorAndTitle = getBooksByAuthorAndTitle;
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBook = req.body;
            if (JSON.stringify(newBook) === "{}") {
                return res.status(400).json({ message: "Bad Request" });
            }
            else {
                const bookCreated = yield book.createBook(newBook);
                return res.status(201).json(bookCreated);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.createBook = createBook;
function editBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const bookEdited = req.body;
            if (JSON.stringify(bookEdited) === "{}") {
                return res.status(400).json({ message: "Bad Request" });
            }
            else {
                const bookUpdated = yield book.editBook(id, bookEdited);
                if (bookUpdated === 0) {
                    return res.status(404).json({ message: "Book not found" });
                }
                else {
                    return res.status(200).json(bookUpdated);
                }
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.editBook = editBook;
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const bookDeleted = yield book.deleteBook(id);
            if (bookDeleted === 0) {
                return res.status(404).json({ message: "Book not found" });
            }
            else {
                return res.status(200).json({ message: "Book deleted" });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.deleteBook = deleteBook;

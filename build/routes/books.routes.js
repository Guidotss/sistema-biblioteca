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
const express_1 = require("express");
const books_controllers_1 = require("../controllers/books.controllers");
const router = (0, express_1.Router)();
router.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.query;
    if (id && !name) {
        const book = yield (0, books_controllers_1.getBookById)(String(id));
        res.json(book);
    }
    else if (name && !id) {
        const book = yield (0, books_controllers_1.getBookByName)(String(name));
        res.json(book);
    }
    else if (id && name) {
        const book = yield (0, books_controllers_1.getBookById)(String(id));
        res.json(book);
    }
    else if (!id && !name) {
        const books = yield (0, books_controllers_1.getAll)();
        res.json(books);
    }
}));
router.post("/api/books", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = req.body;
    if (JSON.stringify(newBook) == "{}") {
        res.json({
            message: "Please provide a book"
        });
    }
    else {
        yield (0, books_controllers_1.createBook)(newBook);
    }
}));
router.put("/api", (req, res) => {
});
router.delete("/api", (req, res) => {
    res.send("Hello World");
});
exports.default = router;

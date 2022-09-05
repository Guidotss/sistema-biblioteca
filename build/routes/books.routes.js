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
router.get("/api", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield (0, books_controllers_1.getAll)());
}));
router.post("/api/books", (req, res) => {
    res.send("Hello World");
});
router.post("/api", (req, res) => {
    res.send("Hello World");
});
router.delete("/api", (req, res) => {
    res.send("Hello World");
});
exports.default = router;

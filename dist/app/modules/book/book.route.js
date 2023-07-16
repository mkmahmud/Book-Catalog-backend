"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
// Create Book
router.post("/create-book", book_controller_1.BookController.createBook);
// Update Singel Book
router.patch("/:id", book_controller_1.BookController.updateSingelBook);
// Delete Singel Book
router.delete("/:id", book_controller_1.BookController.deleteBook);
// Get Singel Book
router.get("/:id", book_controller_1.BookController.getSingelBooks);
// Get Book
router.get("/", book_controller_1.BookController.getAllBooks);
exports.BookRoutes = router;

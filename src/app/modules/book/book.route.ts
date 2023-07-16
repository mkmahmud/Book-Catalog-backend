import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

// Create Book
router.post("/create-book", BookController.createBook);

// Update Singel Book
router.patch("/:id", BookController.updateSingelBook);

// Delete Singel Book
router.delete("/:id", BookController.deleteBook);

// Get Singel Book
router.get("/:id", BookController.getSingelBooks);

// Get Book
router.get("/", BookController.getAllBooks);

export const BookRoutes = router;

import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

// Create Book
router.post("/create-book", BookController.createBook);

// Get Singel Book
router.get("/:id", BookController.getSingelBooks);

// Update Singel Book
router.patch("/:id", BookController.updateSingelBook);

// Get Book
router.get("/", BookController.getAllBooks);

export const BookRoutes = router;

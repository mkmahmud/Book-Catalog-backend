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
exports.BookController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const book_service_1 = require("./book.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const book_constant_1 = require("./book.constant");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = req.body;
        const result = yield book_service_1.BookService.createBook(book);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Book created Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = Object.assign({ searchTerm: req.query.searchTerm }, (0, pick_1.default)(req.query, book_constant_1.filterAbleFilds));
        const paginationFields = ["page", "limit", "sortBy", "sortOrder"];
        const paginationOptions = (0, pick_1.default)(req.query, paginationFields);
        const result = yield book_service_1.BookService.getAllBooks(filters, paginationOptions);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Books Data retrived Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingelBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.getSingelBook(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Book Data Retrived Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateSingelBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = yield book_service_1.BookService.updateBook(id, data);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Book Updated Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.deleteBook(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Book Deleted Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BookController = {
    createBook,
    getAllBooks,
    getSingelBooks,
    updateSingelBook,
    deleteBook,
};

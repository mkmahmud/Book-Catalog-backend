import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./book.service";
import pick from "../../../shared/pick";
import { filterAbleFilds } from "./book.constant";
import { IBook, IBookFillters } from "./book.interface";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = req.body;
    const result = await BookService.createBook(book);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters: IBookFillters = {
      searchTerm: req.query.searchTerm as string,
      ...pick(req.query, filterAbleFilds),
    };
    const paginationFields = ["page", "limit", "sortBy", "sortOrder"];

    const paginationOptions = pick(req.query, paginationFields);

    const result = await BookService.getAllBooks(filters, paginationOptions);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Books Data retrived Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingelBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await BookService.getSingelBook(id);

    sendResponse<IBook>(res, {
      statusCode: 200,
      success: true,
      message: "Academic Faculty created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const BookController = {
  createBook,
  getAllBooks,
  getSingelBooks,
};

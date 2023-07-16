import { SortOrder } from "mongoose";
import { IBook, IBookFillters } from "./book.interface";
import { BookModel } from "./book.model";
import { paginationHelpers } from "../../../helpers/pageination";
import { searchFileds } from "./book.constant";

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await BookModel.create(payload);
  return result;
};

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type IGenericResponse<T> = {
  meta: {
    page?: number;
    limit?: number;
    total: number;
  };
  data: T;
};

const getAllBooks = async (
  filters: IBookFillters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filltersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: searchFileds.map((fild: any) => ({
        [fild]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filltersData).length) {
    andConditions.push({
      $and: Object.entries(filltersData).map(([fild, value]) => ({
        [fild]: value,
      })),
    });
  }

  const { page, limit, skip, firstPublish, sortOrder } =
    paginationHelpers.calclutePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (firstPublish && sortOrder) {
    sortConditions[firstPublish] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await BookModel.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await BookModel.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingelBook = async (id: string): Promise<IBook | null> => {
  const result = await BookModel.findById(id);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await BookModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await BookModel.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingelBook,
  updateBook,
  deleteBook,
};

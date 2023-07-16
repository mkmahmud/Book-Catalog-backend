import { Model, Types } from "mongoose";
import { IBook } from "../book/book.interface";

export interface IWishList {
  user: {
    userEmail: string;
  };
  book: Types.ObjectId | IBook;
}

export type IWishListModel = Model<IWishList>;

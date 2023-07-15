import { Schema, model } from "mongoose";
import { IBook, IBookModel } from "./book.interface";

const BookSchema = new Schema<IBook>(
  {
    thumbnail: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    user: {
      profileImg: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    shortTitle: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    firstPublish: {
      type: String,
    },
    isbn: {
      type: String,
    },
    page: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    totalShare: {
      type: Number,
    },
    reviews: {
      type: [Object],
    },
  },
  {
    timestamps: true,
  }
);

export const BookModel = model<IBook, IBookModel>("Book", BookSchema);

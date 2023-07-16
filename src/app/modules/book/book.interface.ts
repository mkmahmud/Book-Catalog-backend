import { Model } from "mongoose";

export interface IBook {
  thumbnail: string;
  title: string;
  user: {
    profileImg: string;
    name: string;
  };
  shortTitle: string;
  publisher: string;
  firstPublish?: string;
  isbn: string;
  language: string;
  page: number;
  genre: string;
  totalShare?: number;
  reviews?: object[];
  author: string;
}

export type IBookFillters = { searchTerm: string };

export type IBookModel = Model<IBook>;

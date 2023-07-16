import { SortOrder } from "mongoose";
import { IWishList } from "./wishList.interface";
import { WishListModel } from "./wishlist.model";

const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const result = await WishListModel.create(payload);
  return result;
};

const getAllWishList = async (email: any) => {
  const result = await WishListModel.find({ userEmail: email }).populate(
    "book"
  );

  return {
    data: result,
  };
};

export const WishListService = {
  createWishList,
  getAllWishList,
};

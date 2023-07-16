import { SortOrder } from "mongoose";
import { IWishList } from "./wishList.interface";
import { WishListModel } from "./wishlist.model";

const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const result = await WishListModel.create(payload);
  return result;
};

export const WishListService = {
  createWishList,
};

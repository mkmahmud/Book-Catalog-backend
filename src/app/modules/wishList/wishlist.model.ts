import { Schema, model } from "mongoose";
import { IWishList, IWishListModel } from "./wishList.interface";

const wishListSchema = new Schema<IWishList>(
  {
    user: {
      userEmail: {
        type: String,
        required: true,
      },
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  },
  {
    timestamps: true,
  }
);

export const WishListModel = model<IWishList, IWishListModel>(
  "wishlist",
  wishListSchema
);

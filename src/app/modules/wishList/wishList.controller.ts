import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { WishListService } from "./wishList.service";

const createWishList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await WishListService.createWishList(data);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book Added in wish List Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllWishlist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.query;

    const result = await WishListService.getAllWishList(email);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Wish List Data retrived Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const WishListController = {
  createWishList,
  getAllWishlist,
};

import express from "express";
import { WishListController } from "./wishList.controller";

const router = express.Router();

// Create Wish list
router.post("/", WishListController.createWishList);

export const WishListRoutes = router;

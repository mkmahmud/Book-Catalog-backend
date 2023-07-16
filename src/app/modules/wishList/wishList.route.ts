import express from "express";
import { WishListController } from "./wishList.controller";

const router = express.Router();

// Create Wish list
router.post("/", WishListController.createWishList);

// Get Wish list
router.get("/", WishListController.getAllWishlist);

export const WishListRoutes = router;

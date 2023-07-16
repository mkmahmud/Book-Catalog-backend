import express from "express";
import { BookRoutes } from "../modules/book/book.route";
import { WishListRoutes } from "../modules/wishList/wishList.route";

const routes = express.Router();

// Routes
const Routers = [
  {
    path: "/book",
    route: BookRoutes,
  },
  {
    path: "/wishlist",
    route: WishListRoutes,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;

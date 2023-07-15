import express from "express";
import { BookRoutes } from "../modules/book/book.route";

const routes = express.Router();

// Routes
const Routers = [
  {
    path: "/book",
    route: BookRoutes,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;

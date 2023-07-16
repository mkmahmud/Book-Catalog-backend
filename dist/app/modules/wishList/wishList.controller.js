"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const wishList_service_1 = require("./wishList.service");
const createWishList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield wishList_service_1.WishListService.createWishList(data);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Book Added in wish List Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllWishlist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield wishList_service_1.WishListService.getAllWishList(email);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Wish List Data retrived Successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.WishListController = {
    createWishList,
    getAllWishlist,
};

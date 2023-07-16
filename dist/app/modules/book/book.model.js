"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    thumbnail: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    user: {
        profileImg: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    shortTitle: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    firstPublish: {
        type: String,
    },
    isbn: {
        type: String,
    },
    language: {
        type: String,
        required: true,
    },
    page: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    totalShare: {
        type: Number,
    },
    reviews: {
        type: [Object],
    },
    author: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.BookModel = (0, mongoose_1.model)("Book", BookSchema);

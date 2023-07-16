"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHelpers = void 0;
const calclutePagination = (options) => {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 100);
    const skip = (page - 1) * limit;
    const firstPublish = options.sortBy || "firstPublish";
    const sortOrder = options.sortOrder || "desc";
    return {
        page,
        limit,
        skip,
        firstPublish,
        sortOrder,
    };
};
exports.paginationHelpers = {
    calclutePagination,
};

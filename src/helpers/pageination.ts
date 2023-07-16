import { SortOrder } from "mongoose";

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  firstPublish: string;
  sortOrder: SortOrder;
};

const calclutePagination = (options: IOptions): IOptionsResult => {
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

export const paginationHelpers = {
  calclutePagination,
};

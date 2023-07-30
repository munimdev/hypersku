export type Filter = {
  keyword: string;
  selectedDate: string;
  selectedPrice: string;
  selectedDelivery: string;
};

export type Pagination = {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalCount: number;
};

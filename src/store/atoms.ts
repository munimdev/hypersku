import { TCategory, TCategoryWithProducts } from "@/types/category";
import { Filter, Pagination } from "@/types/misc";
import { atom } from "jotai";

export const categoriesAtom = atom<TCategory[]>([]);
export const categoryInfoAtom = atom<TCategoryWithProducts>({
  id: "",
  name: "",
  subCategories: [],
  products: [],
});
export const filterAtom = atom<Filter | null>(null);
export const priceAtom = atom<string | null>(null);
export const deliveryTimeAtom = atom<string | null>(null);
export const selectedDateAtom = atom<string | null>(null);
export const paginationAtom = atom<Pagination>({
  page: 1,
  totalPages: 1,
  hasNextPage: false,
  hasPrevPage: false,
  totalCount: 0,
});

import { TProduct } from "./product";

export type TCategory = {
  id: string;
  name: string;
  subCategories: TSubCategory[];
};

export type TSubCategory = {
  id: string;
  name: string;
  parentCategoryId: string;
};

export type TCategoryWithProducts = TCategory & {
  products: TProduct[];
};

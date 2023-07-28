import React from "react";
import Rating from "../misc/Rating";

import { TProduct } from "@/types/product";

const ProductCard = (product: TProduct) => {
  return (
    <div className="flex flex-col border border-gray-200 hover:shadow-[0_2px_12px_0px_rgba(0,0,0,0.1)] transition duration-200 ease-in-out">
      <img
        className="transition duration-200 ease-in-out"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col p-3 gap-y-16">
        <div>
          <p className="font-bold">{product.name}</p>
          <p className="text-xs font-bold text-red-800">USD ${product.price}</p>
        </div>
        <div className="space-y-2">
          <Rating rating={product.rating} />
          <button
            className="w-full px-2 py-1 text-white bg-blue-700 rounded-md hover:bg-blue-500"
            type="button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

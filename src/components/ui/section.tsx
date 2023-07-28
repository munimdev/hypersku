import React from "react";
import { Separator } from "@/components/ui/separator";
import { TProduct } from "@/types/product";
import ProductCard from "../product/card";

type Props = {
  title: string;
  children: TProduct[];
};
const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="my-5">
      <h3 className="font-bold">{title}</h3>
      <Separator className="my-4" />
      <div className="grid grid-cols-4 gap-5">
        {children?.map((product: TProduct) => (
          <div key={product.id} className="col-span-1">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;

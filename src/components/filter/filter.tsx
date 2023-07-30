import ProductFilter from "./productFilter";
import { dateFilter, priceFilter, deliveryFilter } from "@/data/filters";

const Filter = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="w-full border border-gray-200 py-4">
        <p className="text-center">Clear All (0)</p>
      </div>
      <ProductFilter title="Date" filter={dateFilter} />
      <ProductFilter title="Price" filter={priceFilter} />
      <ProductFilter title="Delivery" filter={deliveryFilter} />
    </div>
  );
};

export default Filter;

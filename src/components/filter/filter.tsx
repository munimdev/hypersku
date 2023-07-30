import { filterAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import ProductFilter from "./productFilter";
import { dateFilter, priceFilter, deliveryFilter } from "@/data/filters";

type FilterProps = {};

const Filter: React.FC<FilterProps> = ({}) => {
  const [filter, setFilter] = useAtom(filterAtom);

  const clearFilters = () => {
    setFilter({
      selectedDate: "",
      selectedPrice: "",
      selectedDelivery: "",
    });
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex justify-center w-full py-4 border border-gray-200">
        <button className="text-center" onClick={clearFilters}>
          Clear All (0)
        </button>
      </div>

      <ProductFilter
        title="Date"
        filter={dateFilter}
        onChange={(e: string) => setFilter({ ...filter!, selectedDate: e })}
      />
      <ProductFilter
        title="Price"
        filter={priceFilter}
        onChange={(e: string) => setFilter({ ...filter!, selectedPrice: e })}
      />
      <ProductFilter
        title="Delivery"
        filter={deliveryFilter}
        onChange={(e: string) => setFilter({ ...filter!, selectedDelivery: e })}
      />
    </div>
  );
};

export default Filter;

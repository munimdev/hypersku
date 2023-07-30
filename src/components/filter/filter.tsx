import { selectedDateAtom, priceAtom, deliveryTimeAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import ProductFilter from "./productFilter";
import { dateFilter, priceFilter, deliveryFilter } from "@/data/filters";

type FilterProps = {};

const Filter: React.FC<FilterProps> = ({}) => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [selectedPrice, setSelectedPrice] = useAtom(priceAtom);
  const [selectedDeliveryTime, setSelectedDeliveryTime] =
    useAtom(deliveryTimeAtom);

  const clearFilters = () => {
    setSelectedDate("");
    setSelectedPrice("");
    setSelectedDeliveryTime("");
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
        onChange={setSelectedDate}
      />
      <ProductFilter
        title="Price"
        filter={priceFilter}
        onChange={setSelectedPrice}
      />
      <ProductFilter
        title="Delivery"
        filter={deliveryFilter}
        onChange={setSelectedDeliveryTime}
      />
    </div>
  );
};

export default Filter;

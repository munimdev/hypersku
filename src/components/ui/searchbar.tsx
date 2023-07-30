import React from "react";
import { useAtom } from "jotai";
import { filterAtom, paginationAtom, categoryInfoAtom } from "@/store/atoms";
import { useFetch } from "@/hooks";
import { TCategory } from "@/types/category";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Props = {
  categories: TCategory[];
};

const SearchBar: React.FC<Props> = ({ categories }) => {
  const [pagination, setPagination] = useAtom(paginationAtom);
  const [categoryInfo, setCategoryInfo] = useAtom(categoryInfoAtom);
  const [filter, setFilter] = useAtom(filterAtom);

  const { refetch } = useFetch("", { enabled: false });

  const onSearchHandler = () => {
    let queryParams = new URLSearchParams();
    if (categoryInfo.id) queryParams.append("categoryId", categoryInfo.id);
    if (filter?.keyword) queryParams.append("keyword", filter.keyword);
    if (filter?.selectedPrice)
      queryParams.append("priceRange", filter.selectedPrice);
    if (filter?.selectedDelivery)
      queryParams.append("deliveryTime", filter.selectedDelivery);
    if (pagination.page) queryParams.append("page", pagination.page.toString());
    const queryUrl = `/category/search?${queryParams.toString()}`;

    refetch(queryUrl)
      .then((response) => {
        setPagination((prev) => ({ ...prev, ...response.data.pagination }));
        setCategoryInfo({
          ...response.data.categoryInfo,
          products: response.data.products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2 md:gap-20">
      <div className="flex flex-row flex-1 border border-gray-200">
        <Input
          placeholder="Enter Keyword, SKU, SPU"
          className="border-none outline-none"
          value={filter?.keyword}
          type="text"
          onChange={(e) => setFilter({ ...filter!, keyword: e.target.value })}
        />
        {/* Category Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-none w-52">
              All Category
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>All Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {categories.map((category, index) => (
                <DropdownMenuItem key={index}>
                  <span>{category.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        type="button"
        className="px-10 py-2 bg-blue-700 hover:bg-blue-500"
        onClick={onSearchHandler}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

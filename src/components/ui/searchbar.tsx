import React from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TCategory } from "@/types/category";

type Props = {
  categories: TCategory[];
};

const SearchBar: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 md:gap-20">
      <div className="flex flex-row border border-gray-200 flex-1">
        <Input
          placeholder="Enter Keyword, SKU, SPU"
          className="border-none outline-none"
        />
        {/* Category Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-52 rounded-none">
              All Category
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>All Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {categories.map((category) => (
                <DropdownMenuItem>
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
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

"use client";

import { useState, useEffect } from "react";
import axiosInterceptorInstance from "@/app/interceptor";
import Section from "@/components/ui/section";
import { TCategory } from "@/types/category";
import { TProduct } from "@/types/product";
import SearchBar from "@/components/ui/searchbar";
import Breadcrumb from "@/components/misc/Breadcrumb";
import SubNav from "@/components/ui/subnav";
import Filter from "@/components/filter/filter";
import Pagination from "@/components/ui/pagination";
import { useAtom } from "jotai";
import {
  selectedDateAtom,
  priceAtom,
  deliveryTimeAtom,
  pageAtom,
} from "@/store/atoms";

type TCategoryWithProducts = TCategory & {
  products: TProduct[];
};

export default function CategoryItems({ params }: { params: { id: string } }) {
  const [categoryInfo, setCategoryInfo] = useState<TCategoryWithProducts>({
    id: "",
    name: "",
    subCategories: [],
    products: [],
  });
  const [categories, setCategories] = useState<TCategory[]>([]);

  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [selectedPrice, setSelectedPrice] = useAtom(priceAtom);
  const [selectedDeliveryTime, setSelectedDeliveryTime] =
    useAtom(deliveryTimeAtom);
  const [page, setPage] = useAtom(pageAtom);

  const id = params.id;

  useEffect(() => {
    let queryParams = new URLSearchParams();
    queryParams.append("categoryId", id);
    if (selectedPrice) queryParams.append("priceRange", selectedPrice);
    if (selectedDeliveryTime)
      queryParams.append("deliveryTime", selectedDeliveryTime);
    if (page) queryParams.append("page", page.toString());

    const queryUrl = `/category/search?${queryParams.toString()}`;
    console.log(queryUrl);

    axiosInterceptorInstance
      .get(queryUrl)
      .then((response) => {
        console.log(response.data);
        setCategoryInfo({
          ...response.data.categoryInfo,
          products: response.data.products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, selectedPrice, selectedDeliveryTime, page]);

  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/category");
      setCategories(response.data.categories);
    })();
  }, []);

  return (
    <main className="flex flex-row w-full min-h-screen p-5 py-20 mx-auto md:11/12 lg:w-10/12 xl:w-8/12 gap-x-5">
      <div className="w-5/12">
        <Filter />
      </div>
      <div className="flex flex-col w-full gap-y-10">
        <SearchBar categories={categories} />
        <Breadcrumb navLinks={[categoryInfo.name]} />
        <SubNav navLinks={categoryInfo.subCategories} />
        <div className="flex justify-between space-x-8"></div>
        <Section title={categoryInfo.name}>{categoryInfo.products}</Section>
        <Pagination />
      </div>
    </main>
  );
}

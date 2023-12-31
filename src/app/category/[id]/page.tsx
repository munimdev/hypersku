"use client";

import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  categoriesAtom,
  paginationAtom,
  filterAtom,
  categoryInfoAtom,
} from "@/store/atoms";
import { useFetch } from "@/hooks";

import Section from "@/components/ui/section";
import SearchBar from "@/components/ui/searchbar";
import Breadcrumb from "@/components/misc/Breadcrumb";
import SubNav from "@/components/ui/subnav";
import Filter from "@/components/filter/filter";
import Pagination from "@/components/ui/pagination";

export default function CategoryItems({ params }: { params: { id: string } }) {
  const [categoryInfo, setCategoryInfo] = useAtom(categoryInfoAtom);
  const categories = useAtomValue(categoriesAtom);
  const filter = useAtomValue(filterAtom);
  const [pagination, setPagination] = useAtom(paginationAtom);
  const id = params.id;
  const { refetch: filterRefetch } = useFetch("", { enabled: false });

  useEffect(() => {
    let queryParams = new URLSearchParams();
    queryParams.append("categoryId", id);
    if (filter?.keyword) queryParams.append("keyword", filter.keyword);
    if (filter?.selectedPrice)
      queryParams.append("priceRange", filter.selectedPrice);
    if (filter?.selectedDelivery)
      queryParams.append("deliveryTime", filter.selectedDelivery);
    if (pagination.page) queryParams.append("page", pagination.page.toString());
    const queryUrl = `/category/search?${queryParams.toString()}`;

    filterRefetch(queryUrl)
      .then((resp) => {
        setPagination((prev) => ({ ...prev, ...resp.data.pagination }));
        setCategoryInfo({
          ...resp.data.categoryInfo,
          products: resp.data.products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, pagination.page]);

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
        <Section title={categoryInfo.name + ` (${pagination.totalCount})`}>
          {categoryInfo.products}
        </Section>
        <Pagination />
      </div>
    </main>
  );
}

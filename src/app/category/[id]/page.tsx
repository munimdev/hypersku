"use client";

import { useState, useEffect } from "react";
import axiosInterceptorInstance from "@/app/interceptor";
import Section from "@/components/ui/section";
import { TCategory } from "@/types/category";
import { TProduct } from "@/types/product";
import SearchBar from "@/components/ui/searchbar";
import Category from "@/components/home/category";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Breadcrumb from "@/components/misc/Breadcrumb";
import SubNav from "@/components/ui/subnav";
import Filter from "@/components/filter/filter";
import Pagination from "@/components/ui/pagination";

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

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("");

  const dates = Array(5)
    .fill(0)
    .map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toISOString().split("T")[0];
    });

  const id = params.id;

  useEffect(() => {
    axiosInterceptorInstance
      .get(`/category/search?categoryId=${id}`)
      .then((response) => {
        setCategoryInfo({
          ...response.data.categoryInfo,
          products: response.data.products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
      <div className="flex flex-col gap-y-10">
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

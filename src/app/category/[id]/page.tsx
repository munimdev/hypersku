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

type TCategoryWithProducts = TCategory & {
  products: TProduct[];
};

export default function CategoryItems({ params }: { params: { id: string } }) {
  const [categoryInfo, setCategoryInfo] = useState<TCategoryWithProducts>({
    id: "",
    name: "",
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
  console.log(id);

  useEffect(() => {
    axiosInterceptorInstance
      .get(`/category/search?categoryId=${id}`)
      .then((response) => {
        console.log(response.data);
        setCategoryInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/category");
      console.log(response.data.categories);
      setCategories(response.data.categories);
    })();
  }, []);

  return (
    <main className="flex flex-col w-full min-h-screen p-5 py-20 mx-auto md:11/12 lg:w-10/12 xl:w-8/12 gap-y-10">
      <SearchBar categories={categories} />
      <div className="grid grid-cols-5">
        {categories?.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <div key={category.id} className="col-span-1">
              <Category name={category.name} />
            </div>
          </Link>
        ))}
      </div>
      <hr className="w-full h-1 my-10 bg-gray-300" />
      <div className="flex justify-between space-x-8"></div>
      <hr className="w-full h-1 my-10 bg-gray-300" />
      <Section title={categoryInfo.name}>{categoryInfo.products}</Section>
    </main>
  );
}

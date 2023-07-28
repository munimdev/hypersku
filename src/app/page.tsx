"use client";

import { useState, useEffect } from "react";
import Category from "@/components/home/category";
import SearchBar from "@/components/ui/searchbar";
import Section from "@/components/ui/section";
import axiosInterceptorInstance from "./interceptor";
import { TCategory } from "@/types/category";
import { TProduct } from "@/types/product";

export default function Home() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/category");
      console.log(response.data.categories);
      setCategories(response.data.categories);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/product?limit=4");
      console.log(response.data.product);
      setProducts(response.data.product);
    })();
  }, []);

  return (
    <main className="flex flex-col w-full min-h-screen p-5 py-20 mx-auto md:11/12 lg:w-10/12 xl:w-8/12 gap-y-10">
      <SearchBar categories={categories} />
      <div className="grid grid-cols-5">
        {categories?.map((category) => (
          <div key={category.id} className="col-span-1">
            <Category name={category.name} />
          </div>
        ))}
      </div>
      <Section title="Best Seller">{products}</Section>
    </main>
  );
}

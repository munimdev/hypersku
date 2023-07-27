"use client";

import { useState, useEffect } from "react";
import Category from "@/components/home/category";
import SearchBar from "@/components/ui/searchbar";
import Section from "@/components/ui/section";
import axiosInterceptorInstance from "./interceptor";
import { TCategory } from "@/types/category";

export default function Home() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/category");
      setCategories(response.data.categories);
    })();
  }, []);
  return (
    <main className="w-full md:11/12 lg:w-10/12 xl:w-8/12 mx-auto flex min-h-screen py-20 flex-col p-5 gap-y-10">
      <SearchBar categories={categories} />
      <div className="grid grid-cols-5">
        {categories?.map((category) => (
          <div className="col-span-1">
            <Category name={category.name} />
          </div>
        ))}
      </div>
      <Section title="Best Seller" />
    </main>
  );
}

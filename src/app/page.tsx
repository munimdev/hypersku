"use client";

import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import Category from "@/components/home/category";
import SearchBar from "@/components/ui/searchbar";
import Section from "@/components/ui/section";
import axiosInterceptorInstance from "./interceptor";
import { TProduct } from "@/types/product";
import Link from "next/link";
import { categoriesAtom } from "@/store/atoms";

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [categories, setCategories] = useAtom(categoriesAtom);

  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/category");
      setCategories(response.data.categories);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await axiosInterceptorInstance.get("/product?limit=4");
      setProducts(response.data.product);
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
      <Section title="Best Seller">{products}</Section>
    </main>
  );
}

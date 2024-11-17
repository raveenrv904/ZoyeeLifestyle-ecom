"use client";

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";

const Allproducts = () => {
  const { allProducts, getAllProducts } = useAuthStore();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="w-full space-y-3">
      <h2 className="text-3xl font-semibold text-center">All Products</h2>
      <div className="w-full flex justify-center items-center !mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-12 md:px-16">
          {allProducts?.slice(0, 8).map((item) => {
            return (
              <ProductCard
                productId={item.id}
                imgUrl={item.images[0]}
                title={item.title}
                price={item.price}
                discount={20}
                category={item.category.name}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
      {allProducts.length > 8 && (
        <Link href={"/shop"}>
          <div className="flex justify-center items-center !mt-16">
            <button className=" px-7 py-3 font-semibold tracking-wide capitalize border-[2px] border-gray-400 text-gray-400 hover:text-gray-500 transition-all duration-200 ease-in-out hover:shadow-xl">
              Show More
            </button>
          </div>
        </Link>
      )}
    </section>
  );
};

export default Allproducts;

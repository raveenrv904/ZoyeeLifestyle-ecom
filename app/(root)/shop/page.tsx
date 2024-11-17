/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Filter from "@/components/Filter";
import PageBanner from "@/components/PageBanner";
import PaginationSection from "@/components/PaginationSection";
import ProductCard from "@/components/ProductCard";
import SpecialBanner from "@/components/SpecialBanner";
import { useAuthStore } from "@/store/authStore";
import { paginationData } from "@/utils/helper";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const { allProducts, getAllProducts } = useAuthStore();

  const [currentPage, setCurrentPage] = useState(1);

  const [productPerPage, setProductPerPage] = useState(16);
  const [totalPossiblePage, setTotalPossiblePage] = useState(0);

  // Recalculate total pages whenever allProducts or productPerPage changes
  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setTotalPossiblePage(Math.ceil(allProducts.length / productPerPage));
    } else {
      setTotalPossiblePage(0); // You could set it to 0 if no products exist
    }
  }, [allProducts, productPerPage]); // dependency array ensures it recalculates when either value changes

  const [productSlice, setProductSlice] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: productPerPage,
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const fetchStartAndEnd = async () => {
      const [start, end] = await paginationData(currentPage, productPerPage);
      setProductSlice({
        ...productSlice,
        start,
        end,
      });
    };
    fetchStartAndEnd();
  }, [currentPage]);

  return (
    <div className="w-full">
      <PageBanner title="shop" />
      <Filter setProductPerPage={setProductPerPage} />
      <div className="w-full flex justify-center items-center !mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-12 md:px-16">
          {allProducts
            .slice(productSlice.start, productSlice.end)
            ?.map((item: any) => {
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

      {allProducts.length > productPerPage && (
        <PaginationSection
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPossiblePage={totalPossiblePage}
        />
      )}

      <SpecialBanner />
    </div>
  );
};

export default Shop;

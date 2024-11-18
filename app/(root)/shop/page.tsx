"use client";

import Filter from "@/components/Filter";
import PageBanner from "@/components/PageBanner";
import PaginationSection from "@/components/PaginationSection";
import ProductCard from "@/components/ProductCard";
import SpecialBanner from "@/components/SpecialBanner";
import { useAuthStore } from "@/store/authStore";
import { Data } from "@/types/index.types";
import { getFilteredData, paginationData } from "@/utils/helper";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const { allProducts, getAllProducts, isLoading } = useAuthStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(16);
  const [totalPossiblePage, setTotalPossiblePage] = useState(0);

  const [filterData, setFilterData] = useState<Data[]>([]);

  const [filter, setFilter] = useState<string>("Filter");

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setTotalPossiblePage(Math.ceil(allProducts.length / productPerPage));
    } else {
      setTotalPossiblePage(0);
    }
  }, [allProducts, productPerPage]);

  useEffect(() => {
    const fetchData = async () => {
      const newFilteredData = await getFilteredData(filter, allProducts);
      setFilterData(newFilteredData);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const [productSlice, setProductSlice] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: productPerPage,
  });

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    const fetchStartAndEnd = async () => {
      const [start, end] = await paginationData(currentPage, productPerPage);
      setProductSlice({ start, end }); // Directly set the new state
    };
    fetchStartAndEnd();
  }, [currentPage, productPerPage]); // Added `productPerPage` to dependencies

  return (
    <div className="w-full">
      <PageBanner title="shop" />
      <Filter
        setProductPerPage={setProductPerPage}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="w-full flex justify-center items-center !mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-12 md:px-16">
          {(filterData.length > 0 ? filterData : allProducts)
            .slice(productSlice.start, productSlice.end)
            .map((item) => {
              // Use the `Product` type for better type safety
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
          {isLoading && <h2>Loading....</h2>}
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

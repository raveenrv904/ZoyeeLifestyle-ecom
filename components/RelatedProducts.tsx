/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useAuthStore } from "@/store/authStore";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ categoryId }: { categoryId: any }) => {
  const { categoryProducts, getCategoryProducts } = useAuthStore();

  useEffect(() => {
    getCategoryProducts(categoryId);
  }, []);

  useEffect(() => {
    console.log(categoryProducts);
  }, [categoryProducts]);

  return (
    <div className="px-3">
      <h2 className="text-xl font-semibold">You May Also Like</h2>
      <div className="">
        <Carousel>
          <CarouselContent className="space-x-4 md:space-x-6 lg:space-x-8">
            {categoryProducts?.map((item, index) => (
              <CarouselItem
                className="basis-1/2 xl:basis-1/4 h-full cursor-pointer py-10"
                key={index}
              >
                <ProductCard
                  productId={item.id}
                  imgUrl={item.images[0]}
                  title={item.title}
                  price={item.price}
                  discount={20}
                  category={item.category.name}
                  key={item.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          <div className="space-x-4 py-5 flex justify-center md:justify-between">
            <CarouselPrevious className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all" />
            <CarouselNext className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default RelatedProducts;

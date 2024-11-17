"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

const CategoryCarousel = () => {
  const { getAllCategories, categories } = useAuthStore();

  useEffect(() => {
    const func = async () => {
      await getAllCategories();
    };
    func();
  }, []);

  return (
    <Carousel>
      <CarouselContent className="space-x-4 md:space-x-6 lg:space-x-8">
        {categories.map((item, index) => {
          return (
            <CarouselItem
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full cursor-pointer"
              key={index}
            >
              <Image
                src={item.image}
                width={500}
                height={300}
                className="w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-[20px] object-cover"
                alt={item.name}
              />
              <h3 className="text-xl font-semibold tracking-wider pt-4 sm:text-2xl md:text-xl lg:text-2xl">
                {item.name}
              </h3>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {/* Carousel Navigation */}
      <div className="space-x-4 py-5 flex justify-center md:justify-between">
        <CarouselPrevious className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all" />
        <CarouselNext className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all" />
      </div>
    </Carousel>
  );
};

export default CategoryCarousel;

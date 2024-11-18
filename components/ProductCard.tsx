/* eslint-disable @typescript-eslint/no-explicit-any */
import { calculateDiscountedPrice, removeExtra } from "@/utils/helper";
import { ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  productId: number;
  imgUrl: string | StaticImageData;
  title: string;
  category: string;
  price: number;
  discount: number;
}

const loaderProps = ({ src }: { src: any }) => {
  return src;
};

const ProductCard = ({
  imgUrl,
  title,
  category,
  price,
  discount,
  productId,
}: Props) => {
  // const cartBtnClicked = () => {};

  return (
    <Link href={`/shop/${productId}`}>
      <div className="bg-gray-50 cursor-pointer w-fit transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
        <div className="relative w-full">
          <Image
            src={imgUrl}
            alt={title}
            width={250}
            height={30}
            className="object-cover w-full transition-all duration-300 hover:opacity-80 "
            loader={loaderProps}
          />
          <div className="px-3 text-sm rounded-[20px] font-semibold absolute top-3 right-3 z-20 bg-white tracking-wider text-emerald-700">
            -{discount}%
          </div>
          <div className="p-2 text-sm rounded-full flex justify-center items-center font-semibold absolute bottom-3 right-3 z-20 bg-white tracking-wider text-emerald-700">
            <ShoppingCart className="w-4 h-4" />
          </div>
        </div>
        <div className="space-y-1 px-3 py-1">
          <h2 className="font-semibold  md:text-2xl">{removeExtra(title)}</h2>
          <p className="text-gray-500 text-sm tracking-wide">{category}</p>
          <div className="flex justify-between">
            <p className="font-extrabold  md:text-xl">
              ₹ {calculateDiscountedPrice(price, discount)}
            </p>
            <p className="text-gray-400 font-extrabold line-through md:text-xl">
              ₹ {price}
            </p>
          </div>

          {/* <div className="flex items-center gap-3 ">
          <Link
            href={`/shop/${productId}`}
            className="flex-1 flex justify-center items-center border-[2px] text-primary font-semibold tracking-wider hover:bg-primary transition-all duration-200 ease-in-out hover:text-white py-3 rounded-lg border-primary "
          >
            <button>Buy Now</button>
          </Link>
          <button
            onClick={cartBtnClicked}
            className="flex-[0.3]  py-3 border-[2px] border-primary hover:bg-white transition-all saturate-200 ease-in-out text-primary flex rounded-lg justify-center items-center"
          >
            <ShoppingCart />
          </button>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

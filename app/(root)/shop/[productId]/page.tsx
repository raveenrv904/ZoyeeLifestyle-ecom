/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoadingTemplate from "@/components/LoadingTemplate";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import SingleProductBanner from "@/components/SingleProductBanner";
import SingleProductImageDisplay from "@/components/SingleProductImageDisplay";
import { useAuthStore } from "@/store/authStore";
import React, { useState, useEffect } from "react";

const SingleProductPage = ({
  params,
}: {
  params: Promise<{ productId: string | number }>;
}) => {
  const { getSingleProduct } = useAuthStore();

  const [product, setProduct] = useState<string | number | null>(null);
  const [singleProduct, setSingleProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProductId = async () => {
      const unwrappedParams = await params;
      setProduct(unwrappedParams.productId);
    };

    fetchProductId();
  }, [params]);

  useEffect(() => {
    if (product !== null) {
      const fetchData = async () => {
        const data = await getSingleProduct(product);
        setSingleProduct(data);
      };
      fetchData();
    }
  }, [product, getSingleProduct]);

  return (
    <div>
      {singleProduct ? (
        <div>
          <SingleProductBanner productName={singleProduct.title} />

          {/* Flex layout for product image and details */}
          <div className="my-10 flex flex-col sm:flex-row gap-10 px-4 sm:px-10">
            <div className="sm:w-1/2">
              <SingleProductImageDisplay
                imageOrVideoUrl={singleProduct.images}
              />
            </div>

            <div className="sm:w-1/2 flex flex-col gap-5">
              <ProductDetails
                productId={singleProduct.id}
                title={singleProduct.title}
                price={singleProduct.price}
                description={singleProduct.description}
                category={singleProduct.category.name}
                discount={20}
                size={["M", "L", "XL", "XXL"]}
                color={["#232133", "#522345", "#984567", "#909090"]}
              />
            </div>
          </div>

          {/* Related Products */}
          <div className="px-4 sm:px-10">
            <RelatedProducts categoryId={singleProduct.category.id} />
          </div>
        </div>
      ) : (
        <div>
          <LoadingTemplate />
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;

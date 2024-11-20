/* eslint-disable @typescript-eslint/no-explicit-any */
import { isImage } from "@/utils/helper";
import Image from "next/image";
import React, { useState } from "react";

import { Zoom } from "react-img-zoomer";

const SingleProductImageDisplay = ({
  imageOrVideoUrl,
}: {
  imageOrVideoUrl: Array<string>;
}) => {
  const [mainImage, setMainImage] = useState<string>(imageOrVideoUrl[0]);

  const changeImage = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="w-full">
      <div className="">
        <div className="w-full h-full py-5 flex justify-center items-center">
          {isImage(mainImage) ? (
            <Zoom
              imagesrc={mainImage}
              size={300}
              className="w-full rounded-md shadow-xl"
            />
          ) : (
            <video controls style={{ maxWidth: "100%" }}>
              <source src={mainImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="flex w-full justify-center items-center gap-3">
          {imageOrVideoUrl.map((image, index) => {
            return isImage(image) ? (
              <Image
                src={image}
                width={70}
                height={40}
                alt="side image"
                key={index}
                className={`rounded-md cursor-pointer ${
                  image === mainImage && "border-[2px]"
                } border-pink-600`}
                onClick={() => changeImage(image)}
              />
            ) : (
              <video controls width={50} height={20}>
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProductImageDisplay;

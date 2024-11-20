import React from "react";
import { Separator } from "./ui/separator";
import ProductShare from "./ProductShare";
import { LucideIcon } from "lucide-react";

interface Props {
  skuValue: string;
  tags: Array<string>;
  socialMedia: Array<{ Icon: LucideIcon; link: string }>;
}

const AdditionalInfo = ({ skuValue, tags, socialMedia }: Props) => {
  return (
    <div>
      <Separator />
      <div className="mt-3 flex flex-col gap-2">
        <p className="">
          SKU: <span>{skuValue}</span>
        </p>
        <p className="">
          Tags:{" "}
          <span>
            {tags.map((item, index) => (
              <span
                className="px-2 py-1 bg-pink-300 mx-1 rounded-full text-xs font-semibold tracking-wide text-white"
                key={index}
              >
                {item}
              </span>
            ))}
          </span>
        </p>
        <div className="flex gap-1 items-center">
          Share:{" "}
          <div>
            <ProductShare socialMedia={socialMedia} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

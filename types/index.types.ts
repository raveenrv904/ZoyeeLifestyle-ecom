import { StaticImageData } from "next/image";

interface Category {
  id: number;
  name: string;
  image: string | StaticImageData;
  creationAt: string;
  updatedAt: string;
}

export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<string | StaticImageData>[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

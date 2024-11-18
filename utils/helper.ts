import { Data } from "@/types/index.types";

export const removeExtra = (content: string) => {
  return content.length > 15 ? content.slice(0, 15) + "...." : content;
};

export const calculateDiscountedPrice = (
  actualPrice: number,
  discount: number
): number => {
  const discountAmount = actualPrice * (discount / 100);
  const discountedPrice = actualPrice - discountAmount;
  return discountedPrice;
};

export const paginationData = (currentPageNo: number, pageSize: number) => {
  const start: number = (currentPageNo - 1) * pageSize; // start index
  const end: number = currentPageNo * pageSize; // end index (not inclusive)

  return [start, end];
};

export const getFilteredData = (filterBy: string, data: Array<Data>) => {
  // console.log(filterBy);

  if (filterBy === "By Title") {
    return data.sort((a: Data, b: Data) => {
      return a.title.localeCompare(b.title);
    });
  } else if (filterBy === "High to Low") {
    console.log("inside the title");

    return data.sort((a: Data, b: Data) => {
      return b.price - a.price;
    });
  } else if (filterBy === "Low to High") {
    return data.sort((a: Data, b: Data) => {
      return a.price - b.price;
    });
  }

  return data;
};

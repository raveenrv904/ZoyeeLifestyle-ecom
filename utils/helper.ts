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

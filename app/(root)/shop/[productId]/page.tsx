import React from "react";

const SingleProductPage = ({ params }: { params: { productId: number } }) => {
  return <div>Page: {params.productId}</div>;
};

export default SingleProductPage;

import React from "react";

const SingleProductPage = ({ params }: { params: { productId: string } }) => {
  return <div>Page: {params.productId}</div>;
};

export default SingleProductPage;

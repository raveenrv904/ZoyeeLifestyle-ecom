/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const SingleProductPage = ({ params }: { params: { productId: any } }) => {
  return <div>Page: {params.productId}</div>;
};

export default SingleProductPage;

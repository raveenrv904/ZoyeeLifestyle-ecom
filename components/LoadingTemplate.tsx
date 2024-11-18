import React from "react";

import { CirclesWithBar } from "react-loader-spinner";

const LoadingTemplate = () => {
  return (
    <div className="w-full h-[90vh] gap-3 flex-col flex items-center justify-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h3 className="text-3xl font-semibold">Loading.....</h3>
    </div>
  );
};

export default LoadingTemplate;

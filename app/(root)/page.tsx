import About from "@/components/About";
import Allproducts from "@/components/Allproducts";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="my-20">
        <Category />
      </div>
      <div className="my-10">
        <Allproducts />
      </div>
      <div className="my-10">
        <About />
      </div>
    </div>
  );
};

export default page;

import React from "react";

// import Img1 from "@/components/assets/category/img2.jpg";
import CustomCarousel from "./CustomCarousel";

const About = () => {
  return (
    <section className="md:flex w-full bg-third py-4">
      <div className="md:flex-1 space-y-2 px-4">
        <h2 className="text-3xl font-semibold text-center">About Us</h2>
        <p className="text-sm text-justify md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="md:flex-1 ">
        <CustomCarousel />
      </div>
    </section>
  );
};

export default About;

"use client";

import Image from "next/image";
import React from "react";

import Home from "@/components/assets/Home.png";

import Hex1 from "@/components/assets/hex1.png";
import Hex2 from "@/components/assets/hex2.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full relative h-[80vh] sm:hidden">
      {/* Hero Image */}
      <div className="relative w-full h-full">
        <Image
          src={Home}
          width={1000}
          height={300}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Hexagonal Images */}
      <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 flex justify-center items-end space-x-8">
        <Image
          src={Hex1}
          width={220}
          height={40}
          alt="Hexagonal Image"
          className="relative left-16"
        />
        <Image
          src={Hex2}
          width={220}
          height={40}
          alt="Hexagonal Image"
          className="relative right-16"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <motion.div
          className="absolute top-[20%] flex flex-col justify-center items-center space-y-5 bg-secondary text-white px-2 py-4 translate-y-[-20%]  capitalize"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl text-center font-semibold tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Step Into Style with Our New Arrivals!
          </motion.h1>
          <motion.p
            className="font-medium text-center text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            Discover the latest trends and fresh looks designed to elevate your
            wardrobe. Find your new favorite pieces here!
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <button className="text-black bg-white px-7 py-2 font-semibold tracking-wider rounded-lg shadow-lg hover:tracking-wider hover:font-bold transition-all duration-300 ease-in-out">
              Shop
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";
import CategoryCarousel from "./CategoryCarousel";

const Category = () => {
  return (
    <section className="w-full text-center space-y-3">
      {/* Animate the section as it enters */}
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }} // Start from slightly above and transparent
        animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        Browse the Range
      </motion.h2>

      {/* Animate the description text */}
      <motion.p
        className="text-sm tracking-wide px-5"
        initial={{ opacity: 0, x: -20 }} // Start from left and transparent
        animate={{ opacity: 1, x: 0 }} // Fade in and slide to original position
        transition={{ duration: 0.5, delay: 0.2 }} // Delay a bit for the paragraph
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>

      {/* Animate the category carousel */}
      <div className="px-10 py-10 md:px-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} // Start from small and transparent
          animate={{ opacity: 1, scale: 1 }} // Scale up to normal size and fade in
          transition={{ duration: 0.5, delay: 0.4 }} // Delay slightly for carousel
        >
          <CategoryCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Category;

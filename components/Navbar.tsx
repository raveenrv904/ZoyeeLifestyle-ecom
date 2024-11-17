"use client";

import React from "react";
import AuthLogo from "./AuthLogo";
import { NAVLINKS } from "@/constants/index.constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Heart, Search, ShoppingCart, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import SidebarSheet from "./SidebarSheet";

const Navbar = () => {
  const params = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-between items-center px-6 py-4 lg:px-12 lg:py-6 bg-white shadow-md"
    >
      {/* Logo Section */}
      <div className="w-10 h-10">
        <AuthLogo width={200} height={40} />
      </div>

      {/* Navigation Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex gap-6 items-center"
      >
        {NAVLINKS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`${
              params === item.link
                ? "font-semibold text-primary"
                : "text-gray-600"
            } font-medium hover:text-primary transition-all`}
          >
            <p className="tracking-wide text-base lg:text-lg">{item.label}</p>
          </Link>
        ))}
      </motion.div>

      {/* Action Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-5 lg:gap-7"
      >
        <div className=" items-center gap-5 lg:gap-7 hidden sm:flex">
          <Link href={"/profile"}>
            <UserCircle
              className={`w-6 h-6 lg:w-7 lg:h-7 cursor-pointer ${
                params === "/profile" && "text-primary"
              }`}
            />
          </Link>
          <Search className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer text-gray-600 hover:text-primary transition-all" />

          <Link href={"/wishlist"}>
            <Heart
              className={`w-6 h-6 lg:w-7 lg:h-7 cursor-pointer ${
                params === "/wishlist" && "text-primary"
              }`}
            />
          </Link>

          <Link href={"/cart"}>
            <ShoppingCart
              className={`w-6 h-6 lg:w-7 lg:h-7 cursor-pointer ${
                params === "/cart" && "text-primary"
              }`}
            />
          </Link>
        </div>

        {/* Mobile Menu Icon (Optional) */}
        <div className="lg:hidden cursor-pointer flex items-center">
          <SidebarSheet />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

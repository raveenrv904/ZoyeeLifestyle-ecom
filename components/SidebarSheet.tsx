import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, UserCircle } from "lucide-react";
import AuthLogo from "./AuthLogo";
import { NAVLINKS } from "@/constants/index.constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const SidebarSheet = () => {
  const params = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <AuthLogo width={200} height={40} />
          </SheetTitle>
          <div className="text-left ml-4 pt-4">
            {/* Links Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {NAVLINKS.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className={`${
                      params === item.link
                        ? "font-semibold text-primary"
                        : "text-gray-600"
                    } font-medium hover:text-primary transition-all`}
                  >
                    <p className="tracking-wide text-lg mb-2 lg:text-lg">
                      {item.label}
                    </p>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Action Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-5 lg:gap-7 ml-4 sm:hidden"
          >
            {/* Profile Icon */}
            <Link href={"/profile"}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <UserCircle
                  className={`w-7 h-7 cursor-pointer ${
                    params === "/profile" ? "text-primary" : "text-gray-600"
                  }`}
                />
              </motion.div>
            </Link>

            {/* Search Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Search className="w-7 h-7 cursor-pointer text-gray-600 hover:text-primary transition-all" />
            </motion.div>

            {/* Wishlist Icon */}
            <Link href={"/wishlist"}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  className={`w-7 h-7 cursor-pointer ${
                    params === "/wishlist" ? "text-primary" : "text-gray-600"
                  }`}
                />
              </motion.div>
            </Link>

            {/* Cart Icon */}
            <Link href={"/cart"}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ShoppingCart
                  className={`w-7 h-7 cursor-pointer ${
                    params === "/cart" ? "text-primary" : "text-gray-600"
                  }`}
                />
              </motion.div>
            </Link>
          </motion.div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarSheet;

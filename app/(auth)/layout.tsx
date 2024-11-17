import type { Metadata } from "next";

import { ReactNode } from "react";
import "../globals.css";
import Image from "next/image";

import AuthBanner from "../../components/assets/clothes.png";
import AuthLogo from "@/components/AuthLogo";

export const metadata: Metadata = {
  title: "App Title",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="w-full h-screen relative bg-gray-100">
        <div className="w-full h-full relative">
          <Image
            src={AuthBanner}
            width={1000}
            height={1000}
            alt="Auth Image"
            className="w-full h-full object-cover absolute top-0 left-0"
            priority
          />

          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div className="absolute cursor-pointer top-5 left-5 bg-white px-4 py-2 rounded-full shadow-md">
            <AuthLogo width={100} height={20} />
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;

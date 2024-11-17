"use client";
import React from "react";
import { loginFormSchema } from "@/Schemas/schema";
import { useFormik } from "formik";
import Link from "next/link";
import { motion } from "framer-motion";

import { useAuthStore } from "@/store/authStore";

const SignIn = () => {
  const { isLoading, signin } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      const res = await signin(values.email, values.password);
      console.log(res);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-gray-100 rounded-lg shadow-xl"
    >
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back!</h1>
        <p className="text-gray-500 text-center mb-6">
          Sign in to your <span className="text-primary">Zoyee LifeStyle</span>{" "}
          account
        </p>
        <button className="w-full py-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition mb-4">
          Sign In with Google
        </button>
        <div className="text-center text-gray-400 mb-4">or</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
            {touched.password && errors.password && (
              <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md text-sm font-medium hover:bg-primary-dark transition"
          >
            {isLoading ? "Loading.." : "sign In"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;

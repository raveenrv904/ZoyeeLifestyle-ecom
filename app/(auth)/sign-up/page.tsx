"use client";
import React from "react";
import { useFormik } from "formik";
import { signUpFormSchema } from "@/Schemas/schema";
import Link from "next/link";
import { motion } from "framer-motion";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpFormSchema,
    onSubmit: async (values) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex w-full justify-center items-center "
    >
      <motion.div
        variants={{
          hidden: { scale: 0.9, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.3 } },
        }}
        className="w-full bg-white shadow-lg rounded-lg p-8 max-w-md"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Create an Account
        </h1>
        <p className="text-sm md:text-base text-gray-500 text-center mb-6">
          Join <span className="text-primary">Zoyee LifeStyle</span> today
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
            }}
          >
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
            {touched.username && errors.username && (
              <p className="mt-1 text-red-500 text-sm">{errors.username}</p>
            )}
          </motion.div>
          <motion.div
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
          >
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
          </motion.div>
          <motion.div
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
          >
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
          </motion.div>
          <motion.button
            type="submit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.7 } },
            }}
            className="w-full bg-primary text-white py-2 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-primary-dark transition"
          >
            Sign Up
          </motion.button>
        </form>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8 } },
          }}
          className="text-center mt-4"
        >
          <p className="text-sm md:text-base text-gray-500">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;

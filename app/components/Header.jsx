'use client'
import React from "react";
import Image from "next/image";
import { useFormik } from "formik"; // Import Formik
import * as Yup from "yup"; // Import Yup for validation schema
import { assets } from "@/app/assets/assets";
import { toast } from "react-toastify";
import axios from "axios"; // Ensure axios is imported
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const emailvalidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim() // Removes leading/trailing spaces
    .email("Invalid email format") // Validates format
    .required("Email is required") // Email is mandatory
    .min(5, "Email must be at least 5 characters") // Minimum length validation
    .max(50, "Email must not exceed 50 characters") // Maximum length validation
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must not contain spaces or invalid characters"
    ), // Custom regular expression validation (disallowing spaces)
});

const Page = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailvalidationSchema,  
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("email", values.email);

      try {
        const response = await axios.post("/Api/Email", formData);  
        if (response.data.success) {
          toast.success(response.data.msg);
          formik.resetForm();
        } else {
          toast.error("Error while submitting email");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        toast.error("An error occurred while submitting");
      }
    },
  });

  return (
    <>
      <div className="py-5 px-2 md:px-12 lg:px-28">
      <ToastContainer theme="dark"/>
        <div className="flex justify-between center">
          <Image
            src={assets.logo}
            alt="logo-img"
            className="w-[130px] sm:w-[170px]"
          />
          <div className="flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-3 border border-solid border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
            Get started <Image alt="arrow-icon" src={assets.arrow} />
          </div>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
          <p className="mt-10 max-w-[740px] text-sx m-auto sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            nobis itaque ipsum porro maxime magni officiis vitae illo eius, ea
            ab, ducimus architecto, earum quae ut? Facere architecto nesciunt
            itaque?
          </p>
          <form
            className="shadow-[-7px_7px_0px_#000000] max-w-[500px] flex justify-between border border-black scale-75 sm:scale-100 mx-auto mt-10"
            onSubmit={formik.handleSubmit}  
          >
            <input
              type="email"
              name="email"  
              className="pl-4 outline-none"
              placeholder="Enter your email here"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            
            <button
              type="submit"
              className="border-1 border-black py-4 px-4 sm:px-8 active:bg-black active:text-white"
            >
              Subscribe
            </button>
          </form>
          {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 mt-4">{formik.errors.email}</p>
            ) : (
              ""
            )}
        </div>
      </div>
    </>
  );
};

export default Page;

"use client";

import { assets } from "@/app/assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useFormik } from "formik"; // Import Formik
import * as Yup from "yup"; // Import Yup for validation schema
import { toast } from "react-toastify";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  category: Yup.string()
    .required("Category is required"),
});

const Page = () => {
  const [image, setImage] = useState(null); // State to store the uploaded image

  // Formik setup
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      author: "Alex bent",
      authorImg: "/author_img.png",
    },
    // Use Yup for validation
    validationSchema,
    // Handle form submission
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("author", values.author);
      formData.append("authorImg", values.authorImg);

      // Ensure the image is included
      if (image) {
        formData.append("image", image);
      }

      console.log("FormData being sent:", [...formData.entries()]); // Log FormData entries

      try {
        const response = await axios.post("/Api/Blog", formData);

        if (response.data.success) {
          toast.success(response.data.msg);
          setImage(null);
          formik.resetForm(); // Reset the form after successful submission
        } else {
          toast.error("Error submitting the blog");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        toast.error("An error occurred while submitting");
      }
    },
  });

  // Handle file selection and set the image
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setImage(file); // Update the state with the selected file
    }
  };

  return (
    <>
      <form className="py-5 px-5 sm:pt-12 sm:pl-16" onSubmit={formik.handleSubmit}>
        <p>Upload thumbnail</p>
        <div
          className="mt-4 cursor-pointer"
          onClick={() => document.getElementById("image").click()} // Trigger file input click
        >
          <Image
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            width={140}
            height={140}
            alt="icon"
            style={{ width: "165px", height: "90px" }} // Maintain aspect ratio
          />
        </div>
        <input
          type="file"
          id="image"
          hidden
          onChange={handleImageChange} // Handle image change
          required
        />

        <p className="text-xl mt-4 mb-2">Blog title</p>
        <input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full sm:w-[500px] px-4 py-3 border ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          placeholder="Type here"
        />
        {formik.touched.title && formik.errors.title ? (
          <p className="text-red-500 text-sm">{formik.errors.title}</p>
        ) : null}

        <p className="text-xl mt-4 mb-2">Blog description</p>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full sm:w-[500px] px-4 py-3 border ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          placeholder="Type here"
          rows={6}
        />
        {formik.touched.description && formik.errors.description ? (
          <p className="text-red-500 text-sm">{formik.errors.description}</p>
        ) : null}

        <p className="text-xl mt-4 mb-2">Category</p>
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-40 px-4 py-3 border ${formik.touched.category && formik.errors.category ? 'border-red-500' : ''}`}
        >
          <option value="">Select Category</option>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        {formik.touched.category && formik.errors.category ? (
          <p className="text-red-500 text-sm">{formik.errors.category}</p>
        ) : null}

        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Add blog
        </button>
      </form>
    </>
  );
};

export default Page;

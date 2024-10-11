"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios
import Blogitem from "@/app/components/Blogitem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blog, setBlog] = useState([]); // Initialize as an empty array

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/Api/Blog"); // Ensure the correct path is used
      setBlog(response.data.blog); // Make sure the data is set correctly
    } catch (error) {
      console.log("Error occurred while fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap sm:flex-nowrap gap-6 my-8 ">
        <button
          onClick={() => setMenu("All")}
          className={`px-4 py-1 rounded-sm transition-opacity duration-500 ${
            menu === "All" ? "bg-black text-white opacity-100" : "opacity-50"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`px-4 py-1 rounded-sm transition-opacity duration-500 ${
            menu === "Technology"
              ? "bg-black text-white opacity-100"
              : "opacity-50"
          }`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`px-4 py-1 rounded-sm transition-opacity duration-500 ${
            menu === "Startup"
              ? "bg-black text-white opacity-100"
              : "opacity-50"
          }`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={`px-4 py-1 rounded-sm transition-opacity duration-500 ${
            menu === "Lifestyle"
              ? "bg-black text-white opacity-100"
              : "opacity-50"
          }`}
        >
          Lifestyle
        </button>
      </div>

      <div className="flex-wrap flex justify-around gap-1 px-2 sm:px-0 gap-y-10 mb-16 xl:mx-24">
        {blog
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item) => {
            return (
              <Blogitem
                key={item._id}
                id={item._id}
                description={item.description}
                category={item.category}
                image={item.image}
                title={item.title}
              />
            );
          })}
      </div>
    </>
  );
};

export default BlogList;

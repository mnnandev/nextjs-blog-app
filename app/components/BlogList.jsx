"use client";
import React, { useState } from "react";
import { blog_data } from "../assets/assets";
import Blogitem from "@/app/components/Blogitem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

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
        {blog_data.filter((item)=> menu === "All"?true:item.category === menu ).map((item) => {
          return (
            <Blogitem
              key={item.id}
              id={item.id}
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

"use client";
import BlogTableItem from "@/app/components/adminComponents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [blog, setBlog] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/Api/Blog"); // Ensure the correct route
      setBlog(response.data.blog); // Set the blog data
    } catch (error) {
      console.log("Error occurred while fetching blogs:", error);
    }
  };

  // Fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlogs = async (mongoId) => {
    try {
      const response = await axios.delete("/Api/Blog", {
        params: { id: mongoId }, // Correctly passing the `id` as a query parameter
      });
      toast.success(response.data.msg);
      fetchBlogs(); // Re-fetch the blogs after successful deletion
    } catch (error) {
      console.error("Error deleting blog: ", error);
      toast.error("An error occurred while deleting");
    }
  };

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div
        className="relative h-[80vh] max-w-[650px] overflow-x-auto mt-4 border border-gray-400 overflow-y-scroll scroll-custom
      "
      >
        <table className="w-full text-sm text-gray-700 text-left uppercase bg-gray-50">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blog.map((item, index) => {
              return (
                <BlogTableItem
                  authorImg={item.authorImg}
                  title={item.title}
                  author={item.author}
                  key={index}
                  mongoId={item._id}
                  date={item.date}
                  deleteBlogs={deleteBlogs}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

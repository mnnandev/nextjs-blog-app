import Image from "next/image";
import { assets } from "@/app/assets/assets";
import React from "react";

const BlogTableItem = ({ authorImg, title, author,date,mongoId, deleteBlogs }) => {
    const blogDate = new Date(date)
  return (
    <tr className="bg-white border-b">
      <th className="items-center gap-3 hidden sm:flex px-6 font-medium text-gray-900 whitespace-nowrap">
        <Image
          width={40}
          height={40}
          src={assets.profile_icon} // Logical OR for fallback
          alt="author-img"
        />
        <p className="font-semibold">{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "non tile"}</td>
      <td className="px-6 py-4">{blogDate.toDateString()}</td>
      <td onClick={()=>deleteBlogs(mongoId)} className="pr-6 pl-[40px] py-3 cursor-pointer">x</td>
    </tr>
  );
};

export default BlogTableItem;

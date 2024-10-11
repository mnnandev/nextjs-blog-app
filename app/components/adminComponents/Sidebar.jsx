import { assets } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <Link href={'/'} className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="logo-img" />
      </Link>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-b">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href='/Admin/addProduct' className="flex flex-center items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add_icon} alt="add-icon" width={28} />
            <p>Add blogs</p>
          </Link>
          {/* is sy nechy waly show ni ho rhy */}
          <Link href='/Admin/blogList' className="mt-5 flex flex-center items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.blog_icon} alt="add-icon" width={28} />
            <p>Blog list</p>
          </Link>
          <Link href='/Admin/Subscription' className="mt-5 flex flex-center items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.email_icon} alt="add-icon" width={28} />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

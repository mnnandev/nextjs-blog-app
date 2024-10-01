"use client";
import Image from "next/image";
import { assets, blog_data } from "@/app/assets/assets";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";

const BlogPage = ({ params }) => {
  const [data, setData] = useState("");
  const fetchBlogData = () => {
    const blog = blog_data.find((item) => item.id === Number(params.id));
    console.log(blog, "blog-data");
    setData(blog);
  };
  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  return (
    <div>
      {data && (
        <>
          <div className="bg-gray-200 py-5 sm:px-5 px-2 md:px-12 lg:px-28">
          <div className="flex justify-between center">
          <Link href={'/'}>
          <Image src={assets.logo}   alt='logo-img' className='w-[130px] sm:w-[170px]' />
          </Link>
          <div className="flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-3 border border-solid border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">Get started <Image alt='arrow-icon' src={assets.arrow} /></div>
        </div>
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-4xl font-semibold max-w-[600px] mx-auto">
                {data?.title}
              </h1>
              <Image
                src={data.author_img}
                width={60}
                className="border border-white rounded-full mx-auto mt-6"
                alt="author-img"
              />
              <p className="max-w-[740px] mt-1 pb-2 mx-auto text-sm">
                {data?.author}
              </p>
            </div>
          </div>
          <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image
              src={data?.image}
              alt="blog-img"
              className="border-4 border-white"
              width={1280}
              placeholder="blur"
            />
            <h1 className="my-8 font-semibold text-[26px] text-shadow ">
              Introduction:
            </h1>
            <p>{data?.description}</p>
            <h3 className="my-5 text-[18px] font-semibold text-shadow ">
              Step 1: Self-Reflection and goals settings.
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum
              eum tenetur excepturi est magnam!
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum
              eum tenetur excepturi est magnam!
            </p>
            <h3 className="my-5 text-[18px] font-semibold text-shadow ">
              Step 1: Self-Reflection and goals settings.
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum
              eum tenetur excepturi est magnam!
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum
              eum tenetur excepturi est magnam!
            </p>
            <h3 className="my-5 text-[18px] font-semibold text-shadow ">
              Step 1: Self-Reflection and goals settings.
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum
              eum tenetur excepturi est magnam!
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum
              eum tenetur excepturi est magnam!
            </p>
            <h3 className="my-5 text-[18px] font-semibold text-shadow ">
              Conclustion:
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ipsam facere quidem eum deleniti neque, porro dolorum
              laudantium asperiores blanditiis.
            </p>
            <div className="my-24">
              <p className="text-black font font-semibold my-4">
                Share this article on different social media
              </p>
              <div className="flex">
                <Image
                  src={assets.facebook_icon}
                  width={50}
                  alt="facebook-icon"
                />
                <Image
                  src={assets.twitter_icon}
                  width={50}
                  alt="facebook-icon"
                />
                <Image
                  src={assets.googleplus_icon}
                  width={50}
                  alt="facebook-icon"
                />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;

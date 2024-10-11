import connectToDatabase from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer"; // Buffer import (part of Node.js)
import Blogmodel from "@/lib/models/blogModel"; // Mongoose Blog model
const fs = require("fs");
export async function GET(request) {
  await connectToDatabase();
  const blogId= request.nextUrl.searchParams.get('id');
  if(blogId){
   const blog = await Blogmodel.findById(blogId);
   return NextResponse.json({blog})
  }else {
    const blog = await Blogmodel.find({});
    return NextResponse.json({ blog });
  }
  
}

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData();
    const timeStamp = Date.now();

    // Get the image from the form data and convert it to a buffer
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // Define the path where the image will be saved
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);

    // Construct the image URL
    const imgUrl = `/${timeStamp}_${image.name}`;

    // Gather form data for the blog entry
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl, // Store the image URL
      authorImg: formData.get("authorImg"),
    };

    // Connect to MongoDB
    await connectToDatabase();

    // Create a new blog post in MongoDB
    await Blogmodel.create(blogData);
    console.log("Blog added successfully");

    // Return success response
    return NextResponse.json({ success: true, msg: "Blog added successfully" });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function DELETE(request) {
  try {
    await connectToDatabase(); // Connect to the database before querying
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      throw new Error("ID is required for deletion");
    }

    const blog = await Blogmodel.findById(id);

    if (!blog) {
      return NextResponse.json({
        success: false,
        msg: "Blog not found",
      });
    }

    // Delete the image file associated with the blog post
    fs.unlink(`./public${blog.image}`, (err) => {
      if (err) {
        console.error("Error deleting image file: ", err);
      }
    });

    // Delete the blog entry from the database
    await Blogmodel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      msg: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog: ", error);
    return NextResponse.json({
      success: false,
      msg: error.message,
    });
  }
}

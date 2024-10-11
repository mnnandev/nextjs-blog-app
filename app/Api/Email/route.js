import connectToDatabase from "@/lib/config/db";
import EmailModel from "@/lib/models/emailModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Get form data
    const formData = await request.formData();

    // Extract email from form data
    const emailData = {
      email: formData.get("email"),
    };

    // Connect to the database
    await connectToDatabase();

    // Create a new email entry in the database
    await EmailModel.create(emailData);

    // Return success response
    return NextResponse.json({
      success: true,
      msg: "Email is added to the database",
    });
  } catch (error) {
    // Return error response
    return NextResponse.json({
      success: false,
      msg: error.message || "An error occurred",
    });
  }
}
export async function GET(request) {
  await connectToDatabase();
  const email = await EmailModel.find({});
  return NextResponse.json({ email });
}

export async function DELETE(request) {
  try {
    await connectToDatabase(); // Connect to the database before querying
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      throw new Error("ID is required for deletion");
    }

    // Delete the blog entry from the database
    await EmailModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      msg: "email deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting email: ", error);
    return NextResponse.json({
      success: false,
      msg: error.message,
    });
  }
}

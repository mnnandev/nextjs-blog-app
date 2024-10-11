"use client"
import SubTableItem from "@/app/components/adminComponents/SubTableItem";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";

const page = () => {
  const [email, setEmail] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("/Api/Email");  
      setEmail(response.data.email); // Set the setEmail data
    } catch (error) {
      console.log("Error occurred while fetching setEmails:", error);
    }
  };
  const deleteEmails = async (mongoId) => {
    try {
      const response = await axios.delete("/Api/Email", {
        params: { id: mongoId },  
      });
      toast.success(response.data.msg);
      fetchEmails(); // Re-fetch the emails after successful deletion
    } catch (error) {
      console.error("Error deleting blog: ", error);
      toast.error("An error occurred while deleting");
    }
  };
  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Emails</h1>
      <div
        className="relative h-[80vh] max-w-[600px] overflow-x-auto mt-4 border border-gray-400 overflow-y-scroll scroll-custom
      "
      >
        <table className="w-full text-sm text-gray-700 text-left uppercase bg-gray-50">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Email Subscription
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
            {email.map((item, index) => {
              return (
                <SubTableItem key={index} mongoId={item._id} date={item.date} email={item.email} deleteEmails={deleteEmails}/>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

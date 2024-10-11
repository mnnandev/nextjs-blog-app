import Sidebar from "@/app/components/adminComponents/Sidebar";
import { assets } from "../assets/assets";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function layout({ children }) {
  return (
    <>
      <div className="flex">
      <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between py-3 max-h-[60px] px-12 border-black border">
            <h3 className='font-medium'>Admin Panel</h3>
               <Image src={assets.profile_icon} width={40} alt='profile-icon'/>
          </div>
          {children}
        </div>
      </div>
      
    </>
  );
}

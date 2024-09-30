import Image from "next/image";
import Header from "@/app/components/Header"
import BlogList from "@/app/components/BlogList"


export default function Home() {
  return (
   <div>
    <Header />
    <BlogList />
   </div>
  );
}

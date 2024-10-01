import Image from "next/image";
import Header from "@/app/components/Header"
import BlogList from "@/app/components/BlogList"
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
   <div>
    <Header />
    <BlogList />
    <Footer />
   </div>
  );
}

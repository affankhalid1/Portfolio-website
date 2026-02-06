"useclient"
import Image from "next/image";
import Link from "next/link";
import Home1 from "../components/Home";
import Services from "../components/Services";
import Recentwork from "../components/Recentwork";
import Testimonials from "../components/Testimonials";
import Stories from "@/components/Stories";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrolltoTop";

export default function Home() {

  return (
   <div>
    <Navbar/>
   <Home1/>
   <Services/>
   <Recentwork/>
   <Testimonials/>
   <Stories/>
   <About/>
   <Contact/>
   <div className="fixed bottom-3 right-3">
   <ScrollToTop/>
   </div>
   </div>
  );
}



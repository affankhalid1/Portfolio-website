import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Customcursor from "../components/Customcursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affan Khalid | Web Developer & AI Enthusiast",
  description: "Discover the portfolio of Affan Khalid, a passionate web developer and AI enthusiast. Explore projects, blogs, and services in web development, generative AI, and more.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${inter.className}  bg-black text-[#FFFFFF]` }>
        <Customcursor/>
        {children}
        </body>
    </html> 
  );
}

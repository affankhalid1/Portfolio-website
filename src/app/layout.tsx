// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Customcursor from "../components/Customcursor";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Affan Khalid | Web Developer & AI Enthusiast",
//   description: "Discover the portfolio of Affan Khalid, a passionate web developer and AI enthusiast. Explore projects, blogs, and services in web development, generative AI, and more.",
// };



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body  className={`${inter.className}  bg-black text-[#FFFFFF]` }>
//         <Customcursor/>
//         {children}
//         </body>
//     </html> 
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Customcursor from "../components/Customcursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affan Khalid | Web Developer & AI Enthusiast",
  description: "Affan Khalid - A passionate web developer and AI enthusiast. Explore projects, blogs, and services in web development, generative AI, and more.",
  keywords: "affankhalid, affan khalid blog, affan khalid website, affan khalid portfolio, web developer, AI, Next.js, Tailwind CSS, full-stack development, JavaScript, React",
  openGraph: {
    title: "Affan Khalid | Web Developer & AI Enthusiast",
    description: "Explore the official website of Affan Khalid, a web developer and AI enthusiast.",
    url: "https://affankhalid.vercel.app",
    siteName: "Affan Khalid",
    images: [
      {
        url: "https://affankhalid.vercel.app/profile.jpg", // Replace with actual image URL
        width: 630,
        height: 630,
        alt: "Affan Khalid Website Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affan Khalid | Web Developer & AI Enthusiast",
    description: "Explore the official website of Affan Khalid, a web developer and AI enthusiast.",
    images: ["https://affankhalid.vercel.app/og-image.png"], // Replace with actual image URL
  },
  alternates: {
    canonical: "https://affankhalid.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data (SEO Boost) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Affan Khalid",
          "url": "https://affankhalid.vercel.app",
          "sameAs": [
            "www.linkedin.com/in/affan-khalid-5886702bb",
            "https://github.com/affankhalid1",
          ],
          "jobTitle": "Web Developer & AI Enthusiast",
          "worksFor": {
            "@type": "Organization",
            "name": "Affan Khalid Dev"
          }
        }) }} />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Customcursor />
        {children}
      </body>
    </html>
  );
}


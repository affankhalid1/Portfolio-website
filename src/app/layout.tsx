import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Customcursor from "../components/Customcursor";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affan Khalid | Web Developer & AI Enthusiast",
  description: "Affan Khalid - A passionate web developer and AI enthusiast. Explore projects, blogs, and services in web development, generative AI, and more.",
  keywords: "affan khalid,affankhalid, affan khalid blog, affan khalid website, affan khalid portfolio, web developer, AI, Next.js, Tailwind CSS, full-stack development, JavaScript, React",
  openGraph: {
    title: "Affan Khalid | Web Developer & AI Enthusiast",
    description: "Explore the official website of Affan Khalid, a web developer and AI enthusiast.",
    url: "https://affankhalid.vercel.app",
    siteName: "Affan Khalid",
    images: [
      {
        url: "https://affankhalid.vercel.app/profile.jpg",
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
    images: ["https://affankhalid.vercel.app/og-image.png"],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        
        {/* ========== CHATBOT WIDGET ========== */}
        <Script 
          src="http://localhost:8000/static/widget/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            (window as any).ChatWidget?.init({
              botId: "0202ea0f-ea0f-4f32-b299-505eca608404",
              apiKey: "pk_live_MRwHFK6sb0FgeoG-QMr-yw8KTqsCiLrPpNG-010fVew",
              apiBaseUrl: "http://localhost:8000"
            });
          }}
        />
        {/* ==================================== */}
        
      </body>
    </html>
  );
}

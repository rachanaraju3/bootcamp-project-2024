import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({subsets: ["latin"]});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Rachana's Personal Website",
  description: "A personal website for Rachana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="body">
      <body
        className={inter.className}
      >
       <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SunCart | Master the Summer Heat",
  description: "Premium summer essentials and skincare routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`}>
        <Navbar />
        <main className="grow flex flex-col">
          {children}
        </main>
        <Footer />
        <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
      </body>
    </html>
  );
}
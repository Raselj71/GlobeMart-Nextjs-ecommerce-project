import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/layoutDesign/Header";
import { ToastContainer } from "react-toastify";
import Slider from "./layoutDesign/Slider";

import Sidebar from "./layoutDesign/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobeMart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <div className="flex mx-4 my-4">{children}</div>
      </body>
    </html>
  );
}

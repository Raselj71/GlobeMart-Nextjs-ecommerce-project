"use client";

import React, { useState } from "react";

import { Bebas_Neue } from "next/font/google";
import { redirect, useRouter } from "next/navigation";
import Cart from "@/components/Cart";
import Account from "@/components/Account";

const bebas = Bebas_Neue({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
    
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 w-full px-4 py-2 md:py-3 lg:py-4 bg-mainColoer md:px-35 lg:px-80">
        <div className="flex flex-col">
          <div className="flex justify-between lg:justify-between items-center">
            <h2
              onClick={() => {
                router.push("/");
              }}
              className={`tracking-wide text-white font-semibold text-4xl md:text-5xl cursor-pointer font ${bebas.className}`}
            >
              Globe<span>Mart</span>
            </h2>
            <div className="w-full mt-4 hidden md:block md:mt-0 md:w-auto ">
              <form onSubmit={handleSubmit} className=" flex lg:w-[50rem]">
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  type="search"
                  placeholder="Search in Globemart"
                  className="lg:w-full flex-grow h-10 md:h-12 bg-slate-200 outline-none px-4 rounded-l-md "
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-6  text-xl font-semibold rounded-r-md"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="flex space-x-6 lg:space-x-6 items-center">
              <Cart />
              <Account />
            </div>
          </div>
          <div className="w-full mt-4 md:hidden">
            <form className="flex">
              <input
                type="search"
                placeholder="Search in Globemart"
                className="flex-grow h-10 bg-slate-200 outline-none px-4 rounded-l-md "
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-6  text-xl font-semibold rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

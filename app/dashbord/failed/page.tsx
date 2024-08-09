"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

function Page() {
  const router = useRouter();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.push(`${window.location.origin}/dashbord/orders`);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [router]);

  return (
    <section
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 130px)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-mainColoer rounded-full p-3">
          <IoClose className="text-4xl text-white animate-pulse" />
        </div>
        <h1 className="text-xl font-semibold mt-5">
          Oh no, your payment failed
        </h1>
        <p className="animate-bounce">please try again...</p>
      </div>
    </section>
  );
}

export default Page;

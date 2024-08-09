"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";

function Page() {
  const router = useRouter();
 

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`${window.location.origin}/dashbord/orders`);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <section
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 130px)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-mainColoer rounded-full p-3">
          <GiCheckMark className="text-4xl text-white animate-pulse" />
        </div>
        <h1 className="text-xl font-semibold mt-5">
          Your payment was successful
        </h1>
        <p className="animate-bounce">Redirecting...</p>
      </div>
    </section>
  );
}

export default Page;

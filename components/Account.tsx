"use client";
import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

function Account() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
   
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full focus:outline-none"
        >
          <img
            src=""
            alt="Profile Icon"
            className="w-full h-full rounded-full"
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 w-60 lg:w-64 mt-2 origin-top-right bg-white border border-gray-200 z-50 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <div className=" ">
              <div className="px-4 bg-slate-200 flex items-center rounded-t-md w-full gap-2">
                <IoPersonCircleOutline className="size-10 lg:size-8 text-slate-400" />
                <div className="text-gray-600 ">
                  <p className=" text-gray-800 font-semibold ">
                    {session.user?.name}
                  </p>
                  <p className=" ">01836849353</p>
                </div>
              </div>
              <Link
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                href="/dashbord/profile"
              >
                Profile
              </Link>

              <Link
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                href="/dashbord/orders"
              >
                Order
              </Link>

              <button
                onClick={() => signOut()}
                className="block w-full px-4 py-2 text-md text-left text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      <button
        className="hover:bg-gray-800 px-2 py-1 rounded-sm"
        onClick={() => signIn()}
      >
        <div className="flex items-center text-white">
          <IoMdPerson className="size-6 lg:size-8 " />
          <p className="font-medium">Sign in</p>
        </div>
      </button>
    </>
  );
}

export default Account;

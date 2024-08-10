"use client";

import { useSession } from "next-auth/react";

const Page = () => {
  const {data:session} = useSession();

  return (
    <section className="w-full flex justify-center">
      <div className="container">
        <div className="text-xl font-semibold">Your Profile</div>
        <div className="">{session?.user?.name}</div>
        <div className="">{session?.user?.email}</div>
      </div>
    </section>
  );
};

export default Page;

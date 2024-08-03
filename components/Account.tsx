"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

function Account() {
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    console.log(session);
    return (
      <>
        
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button
        className="text-white text-lg font-bold hover:underline"
        onClick={() => signIn()}
      >
        Log in
      </button>
    </>
  );
}

export default Account;

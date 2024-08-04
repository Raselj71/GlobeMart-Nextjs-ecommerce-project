import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
 <section className="w-full flex">
    <div className="bg-red-700 w-[30%] h-full">
         
    </div>

    <div>
         {children}
    </div>
          
 </section>
  );
}

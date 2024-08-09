import React from "react";
import AdminSideBar from '@/components/AdminSidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="w-full">
    
         <div >
             <AdminSideBar/>
         </div>
         <div>
             {children}
         </div>
    </section>;
}

import React from "react";
import Item from "@/components/Item";

import Sidebar from "../layoutDesign/Sidebar";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { getSearchItem } from "@/config/getSearchItem";

async function page({ params, searchParams }: any) {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const query = searchParams.query;
  const limit = 8;
  const { products, total } = await getSearchItem(currentPage, limit, query);

 

  return (
    <main className="flex flex-col justify-center  lg:flex-row w-full ">
      
        <Sidebar />
        <ToastContainer />
      
      <div>
        <div className="mx-6 font-bold text-2xl text-gray-800 border-l-[5px] mb-2 px-2 border-mainColoer">
          {" "}
          Your search items
        </div>
        <div className="flex justify-center">
          <section className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mx-4">
            {products.map((product: any) => (
              <Item
                key={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.images[0]}
                id={product.id}
              />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

export default page;

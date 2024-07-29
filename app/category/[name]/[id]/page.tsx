import React from "react";
import Item from "@/components/Item";
import { getCategoryProducts } from "@/config/getCategoryItem";
import Sidebar from "../../../layoutDesign/Sidebar";
import { GrNext, GrPrevious } from "react-icons/gr";

async function page({ params, searchParams }:any ) {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const limit = 8; // Number of products per page
  const { products, total } = await getCategoryProducts(0,8,params.id);

  const totalPages = Math.ceil(total / limit);

  return (
    <main className="flex flex-col justify-center  lg:flex-row w-full ">
      <Sidebar />

      <div>
        <div className="px-6 font-bold text-2xl text-gray-800"> Category: {params.name}</div>
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

        <div className=" w-full flex justify-center my-4 gap-4">
          {currentPage > 1 && (
            <a href={`/category/${params.name}/${params.id}/?page=${currentPage - 1}`}>
              <button className="bg-mainColoer items-center rounded-sm border-1 border-white hover:bg-black text-white px-4 font-semibold py-1 flex">
                <GrPrevious /> Previous
              </button>
            </a>
          )}
          {currentPage < totalPages && (
            <a href={`/category/${params.name}/${params.id}/?page=${currentPage + 1}`}>
              <button className="bg-mainColoer items-center rounded-sm border-1 border-white hover:bg-black text-white px-4 font-semibold py-1 flex">
                Next
                <GrNext />
              </button>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export default page;

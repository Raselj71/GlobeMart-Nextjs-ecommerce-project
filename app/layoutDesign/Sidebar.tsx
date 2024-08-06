import getallCategories from "@/config/getallcategory";
import Image from "next/image";
import Link from "next/link";
import React from "react";


async function Sidebar() {
  const categories = await getallCategories();

  return (
    <div className="flex w-full lg:w-[20%] flex-col gap-1 bg-mainColoer mb-10 py-10 h-fit rounded-sm">
      <h2 className="text-2xl text-white text-center mt-4 font-bold">
        Category List
      </h2>
      {categories.map((category: any) => (
        <Link
          key={category.id}
          href={`/category/${category.name}/${category.id}`}
        >
          <div className=" mx-4 bg-slate-200 rounded-md hover:bg-gray-300">
            <div className="flex items-center">
              <Image
              width={64}
              height={64}
                className="size-16"
                src={category.image}
                alt={category.name}
              />
              <p className="px-4 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                {category.name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;

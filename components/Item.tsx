import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
type propstype = {
  title: any;
  price: any;
  imageUrl: any;
  id: Number;
};
function Item({ title, price, imageUrl, id }: propstype) {
  
  return (
    <div className=" border-2 w-[350px] bg-slate-200 drop-shadow-lg">
      <div className="w-[347px] h-[350px]">
        <img className="" src={imageUrl} alt={title} />
      </div>
      <div className="px-4 py-2 text-lg">
        <Link href={`/product/${title}/${id}`}>
          {" "}
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h3>
        </Link>

        <p className="font-semibold">
          price: <span className="text-2xl">{price}</span>$
        </p>
        <Button id={id} image={imageUrl} price={price} title={title} />
      </div>
    </div>
  );
}

export default Item;

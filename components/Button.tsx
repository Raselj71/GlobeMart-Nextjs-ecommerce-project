"use client";
import { add } from "@/state/features/cart/cartSlice";
import { useAppDispatch } from "@/state/hooks";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface propstype {
  id: Number;
  title: String;
  price: String;
  image: String;
}
function Button({ id, title, price, image }: propstype) {
  const dispatch = useAppDispatch();
  const data = {
    id,
    title,
    price,
    image,
    quantity: 1,
  };
  const handleClick = () => {
    dispatch(add(data));
    toast.success("item added to your cart");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full bg-mainColoer rounded-sm hover:bg-black py-1 text-lg text-white transition-all duration-300 ease-in"
      >
        Add to cart
      </button>

     
    </div>
  );
}

export default Button;

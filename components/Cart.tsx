"use client";
import { ChangeMenu } from "@/state/features/Menu/MenuSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const isMenu = useAppSelector((state) => state.menu.isOpen);
  console.log(isMenu);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(ChangeMenu());
    
  };
  return (
    <div onClick={handleClick} className="relative">
      <FaShoppingCart className="text-white size-6 lg:size-8 cursor-pointer" />
      <p className=" absolute -top-3 -right-2 text-white bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
        {items.length}
      </p>
    </div>
  );
}

export default Cart;

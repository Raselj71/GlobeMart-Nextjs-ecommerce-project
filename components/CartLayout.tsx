"use client";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ChangeMenu } from "@/state/features/Menu/MenuSlice";
import CardItem from "@/components/CartItem";
import { useRouter } from "next/navigation";

interface cartprops {
  id: Number;
  title: String;
  price: String;
  image: String;
  quantity: number;
}

function CartLayout() {
  const router = useRouter();
  const isOpen = useAppSelector((state) => state.menu.isOpen);
  const [isDisable, setDisable] = useState(false);

  const dispatch = useAppDispatch();
  const totalCartPrice = useAppSelector((state) => state.cart.total);

  const handleClick = () => {
    dispatch(ChangeMenu());
  };

  const items = useAppSelector((state) => state.cart.items);

 

  return (
    <div
      className={`transition-all duration-300 transform fixed w-[90%] md:w-[50%] lg:w-[25%]  top-0 right-0  z-50 bg-white drop-shadow-lg h-svh p-4 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-full flex justify-end">
        <button
          className="cursor-pointer text-xl hover:bg-mainColoer hover:text-white transition-all duration-300 ease-in"
          onClick={handleClick}
        >
          <CgClose className="font-bold" />
        </button>
      </div>

      <div>
        <h2 className=" text-2xl font-bold text-slate-700">SHOPPING CART </h2>
        <hr></hr>
      </div>

      <div className="overflow-auto h-[80vh]">
        {items.map((item: cartprops, index: any) => (
          <CardItem
            key={index}
            id={item.id}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            title={item.title}
          />
        ))}

        {items.length === 0 && <div>No item selected</div>}
      </div>

      <div>
        <hr />
        <div className="flex justify-between mx-4 lg:mx-10 font-bold text-lg mt-2">
          <p className="font-extrabold">SUBTOTAL:</p>
          <p className="">$ {totalCartPrice}.00</p>
        </div>

        <div className="flex justify-center items-center mt-2">
          <button
           disabled={items.length===0?true:false}
            onClick={() => {
              router.push("/checkout");
              dispatch(ChangeMenu());
            }}
            className="font-bold bg-mainColoer text-white text-lg font-mono  px-10 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartLayout;

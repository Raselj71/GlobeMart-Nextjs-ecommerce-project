import React from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { useAppDispatch } from "@/state/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  remove,
} from "@/state/features/cart/cartSlice";

export interface propstype {
  id: Number | any;
  title: String | any;
  price: String;
  image: String | any;
  quantity: number;
}

function CartItem({ id, title, price, image, quantity }: propstype) {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(remove({ id, image, price, quantity, title }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id, image, price, quantity, title }));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity({ id, image, price, quantity, title }));
  };

  const Total_price = Number(price);
  const total = Total_price * quantity;
  return (
    <div className="border-b">
      <div className="flex items-center  rounded-sm w-full py-2">
        <div className="size-20">
          <img className="size-20 rounded-lg" src={image} alt={title} />
        </div>
        <div className="w-[75%] flex flex-col">
          <p className="text-nowrap overflow-hidden text-ellipsis px-2 text-slate-700">
            {title}
          </p>
          <div className="flex items-center justify-between mt-3 mx-10 px-4 ">
            <div className="flex flex  items-center justify-center gap-2 ">
              <button
                className=" transition-all duration-300 ease-in text-gray-500 bg-gray-300 p-[2px] hover:bg-mainColoer hover:text-white"
                onClick={handleDecrement}
              >
                <LuMinus className="" />
              </button>
              <span>{quantity}</span>
              <button
                className=" transition-all duration-300 ease-in text-gray-500 bg-gray-300 p-[2px] hover:bg-mainColoer hover:text-white"
                onClick={handleIncrement}
              >
                <LuPlus className="" />
              </button>
            </div>
            <p className="text-lg text-slate-900 ">$ {total}.00</p>
          </div>
        </div>
        <button
          className="  text-xl text-slate-700  hover:bg-mainColoer hover:text-white transition-all duration-300 ease-out"
          onClick={handleDelete}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

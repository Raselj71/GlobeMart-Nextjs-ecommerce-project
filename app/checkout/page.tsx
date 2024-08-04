"use client";
import CheckoutItem from "@/components/CheckoutItem";
import { useAppSelector } from "@/state/hooks";
import React, { useState } from "react";

interface propstype {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
}
function page() {
  const [address, setAdress] = useState("");
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = useAppSelector((state) => state.cart.total);
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  return (
    <section className="w-full flex justify-center">
      <div className="container  h-full flex gap-4  flex-col lg:flex-row lg:space-x-4 lg:justify-center">
        <div className="p-4 rounded-md  border-2 bg-white basis-1/2">
          {items.map((item: propstype) => (
            <CheckoutItem
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="bg-white basis-1/3 rounded-md h-fit p-10">
          <div>
            <form onSubmit={handleSumbit}>
              <p>Enter billing Address</p>

              <textarea
                required
                className="border w-full bg-slate-100 px-2"
                name="address"
                id="address"
                placeholder="address"
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              ></textarea>

              <div className="flex justify-between mt-2">
                <p>Subtotal</p>
                <p>{totalPrice}.00$</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Total</p>
                <p>{totalPrice}.00$</p>
              </div>

              <div className="mt-2">
                <button
                  disabled={items.length === 0 ? true : false}
                  type="submit"
                  className={`bg-mainColoer hover:bg-black w-full text-white uppercase text-lg py-1 rounded ${items.length===0?'bg-gray-500 cursor-not-allowed hover:bg-gray-500': ''}`}
                >
                  place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;

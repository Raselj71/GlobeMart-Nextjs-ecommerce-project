"use client";
import CheckoutItem from "@/components/CheckoutItem";
import { useAppSelector } from "@/state/hooks";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

interface propstype {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function Page() {
  const router = useRouter();
  const [address, setAdress] = useState("");
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.total);
  const[loading , setLoading]=useState(false)

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
     setLoading(true);
     e.preventDefault();

    try {
    
      const stripe = await stripePromise;
      if(!stripe){
          throw new Error("Stripe not loaded")
      }

      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        body: JSON.stringify({
          items,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const { sessionId } = await res.json();

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        router.push("/error");
      }
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };

  return (
    <section className="w-full flex justify-center">
      <div className="container h-full flex gap-4 flex-col lg:flex-row lg:space-x-4 lg:justify-center">
        <div className="p-4 rounded-md border-2 bg-white basis-1/2">
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
                  disabled={items.length === 0}
                  type="submit"
                  className={`bg-mainColoer hover:bg-black w-full text-white uppercase text-lg py-1 rounded ${
                    items.length === 0
                      ? "bg-slate-300 cursor-not-allowed hover:bg-slate-300"
                      : ""
                  }`}
                >
                  {loading ? (
                    <span className="flex justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Processing...</span>
                    </span>
                  ) : (
                    <span>Place order</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;

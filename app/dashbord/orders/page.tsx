"use client";

import OrderItem from "@/components/OrderItem";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";
const Page = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchingdata = async () => {
      const response = await fetch(`/api/product/order`);

      const data = await response.json();
      console.log(data.data);

      setData(data.data);
    };

    fetchingdata();
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="container">
        <div className="text-xl font-semibold">Order History</div>
        <div className="">Recent</div>
        <table className="border-collapse w-full bg-white rounded-md">
          <thead className="bg-mainColoer text-white" >
            <tr className="">
              <th className="p-2">Order No</th>
              <th>Address</th>
              <th>Items</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item: any, i: number) => (
                <OrderItem
                  key={i}
                  orderno={i}
                  address={item.billingAddress}
                  items={item.items}
                  status={item.status}
                  totalPrice={item.totalPrice}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Page;

import OrderItem from "@/components/OrderItem";
import { getUserOrderItem } from "@/config/getUserOrderItem";
import React from "react";

async function page() {
  const { data } = await getUserOrderItem();

  return (
    <section className="w-full flex justify-center">
      <div className="container ">
        <div className="text-xl font-semibold ">Order History</div>
        <div className="">Recent</div>

        <table className="table-auto border-collapse border border-slate-500 w-full mb-10">
          <tr className="bg-mainColoer text-white ">
            <th className="border border-slate-600 p-2">Product</th>
            <th className="border border-slate-600">Billing Address</th>
            <th className="border border-slate-600">Date</th>
            <th className="border border-slate-600">Quantity</th>
            <th className="border border-slate-600">Price</th>
            <th className="border border-slate-600">Status</th>
          </tr>
          {data.map((item: any) =>
            item.items.map((product: any, i:any) => (
              <OrderItem
                key={i}
                items={product}
                billingAddress={item.billingAddress}
                date={String(item.createdAt)}
                status={item.status}
              />
            ))
          )}
        </table>
      </div>
    </section>
  );
}

export default page;

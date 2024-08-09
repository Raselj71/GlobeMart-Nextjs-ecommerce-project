import React from "react";
import Link from "next/link";

function OrderItem({ items, billingAddress, date, status }: any) {
  const dateNow = date.split("T");
  const onlydate = dateNow[0];

  return (
    <tr>
      <td className="border border-slate-600">
        <Link href={`${process.env.NEXTAUTH_URL}/`}>
          <img
            className="size-20 lg:size-40"
            src={items.image}
            alt={items.title}
          />
        </Link>
      </td>
      <td className="border border-slate-600 ">{billingAddress}</td>
      <td className="border border-slate-600 text-center">{onlydate}</td>
      <td className="border border-slate-600 text-center">{items.quantity}</td>
      <td className="border border-slate-600 text-center">{items.price}</td>
      <td className="border border-slate-600 text-center">{status}</td>
    </tr>
  );
}

export default OrderItem;

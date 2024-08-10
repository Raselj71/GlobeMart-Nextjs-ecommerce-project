import React, { useState } from "react";
import CheckoutItem from "./CheckoutItem";
export const dynamic = "force-dynamic";
function OrderItem({ orderno, totalPrice, items, address, status }: any) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <tr
        className="cursor-pointer hover:bg-gray-400 even:bg-slate-200 "
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <td className="text-center p-2">{orderno + 1}</td>
        <td>{address}</td>
        <td className="text-center">{items.length}</td>
        <td className="text-center">${totalPrice}.00</td>
        <td className="text-center">{status}</td>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan={5} className="p-4 border-2">
            <div className="flex flex-col gap-2">
              {items.map((item: any) => (
                <CheckoutItem
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  title={item.title}
                  key={item.id}
                />
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default OrderItem;

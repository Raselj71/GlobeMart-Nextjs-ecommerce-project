import React from 'react'
import Image from 'next/image';

interface propstype{
    title:string;
    image:string;
    price:number |string;
    quantity:number | string
}

function CheckoutItem({title,image,price,quantity}:propstype) {
    const totalprice=Number(price)*Number(quantity)
  return (
    <div className="border-b">
      <div className="flex items-center  rounded-sm w-full py-2">
        <div className="size-20">
          <Image className="size-20 rounded-lg" width={80} height={80} src={image} alt={title} />
        </div>
        <div className="w-[75%] flex flex-col">
          <p className="text-nowrap overflow-hidden text-ellipsis px-2 text-slate-700">
            {title}
          </p>
          <div className="flex items-center justify-between mt-3 mx-10 px-4 ">
            <div className="flex flex  items-center justify-center gap-2 text-gray-600">
              <p className='text-sm'>Quantity:</p>
              <span className='text-sm'>{quantity}</span>
             
            </div>
            <p className="text-lg text-slate-900 text-sm text-gray-600">
                Price:{totalprice}.00$
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default CheckoutItem
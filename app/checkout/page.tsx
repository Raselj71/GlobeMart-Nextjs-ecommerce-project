'use client'
import CheckoutItem from '@/components/CheckoutItem'
import { useAppSelector } from '@/state/hooks'
import React from 'react'

 interface propstype {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
}
function page() {
  const items=useAppSelector((state)=>state.cart.items)
  return (
   
    <section className='w-full flex justify-center'>
        <div className='container  h-full flex  flex-col lg:flex-row lg:space-x-4 lg:justify-center'>
            <div className='p-4 rounded-md  border-2 bg-white basis-1/2 overflow-hidden'>
                
                {items.map((item:propstype)=>(
                    <CheckoutItem title={item.title} image={item.image} price={item.price} quantity={item.quantity}/>
                ))}
            </div>

            <div className='bg-white basis-1/3 rounded-md h-fit p-10'>
              <div>
                asfgasasdgasdfgasdgasgasdgfasg
              </div>
            </div>
        </div>

    </section>
  )
}

export default page
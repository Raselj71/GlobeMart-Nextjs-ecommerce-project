import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { OrderModel } from "@/models/OrderModels";
import { connectdb } from "@/config/db";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/helper/authOption";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface propstype {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export async function POST(req: NextRequest, res: NextResponse) {
  const usersession =await getServerSession(authOptions);
 

 

  try {
    const conn = await connectdb();
    const {  address,items, totalPrice } = await req.json();
    console.log(totalPrice)


    const lineItems = items.map((item: propstype) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      metadata:{
         userId:usersession.id,
        
      },
      mode: "payment",
      success_url: `${process.env.BASE_URL}dashbord/success`,
      cancel_url: `${process.env.BASE_URL}dashbord/failed`,
    });

    const sessionId = session.id;
    const Order = new OrderModel({
      sessionId: sessionId,
      userId: usersession.id,
      items: items.map((item:any) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
        
      })),

     totalPrice:totalPrice,
      billingAddress: address,
    });

    const neworder=await Order.save();
  
    return NextResponse.json({ sessionId: session.id }, { status: 200 });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

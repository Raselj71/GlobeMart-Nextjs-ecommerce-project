import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface propstype {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export async function POST(req:NextRequest, res:NextResponse) {
  try {
    const { items } = await req.json();

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
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });
 
     return NextResponse.json({sessionId:session.id},{status:200})
 
  } catch (err) {
    console.log(err);
   
     return NextResponse.json({error:"internal Server Error"},{status:500})
  }
}

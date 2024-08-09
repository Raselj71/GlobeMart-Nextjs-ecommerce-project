import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { connectdb } from "@/config/db";
import { OrderModel } from "@/models/OrderModels";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new NextResponse('Invalid signature', { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  console.log('Received event:', event.type);
  console.log('Session ID:', session.id);

  switch (event.type) {
    case 'checkout.session.completed': {
      try {
       
        const conn = await connectdb();
        console.log('Database connection established');

        const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);
        console.log('Payment Intent retrieved:', paymentIntent);

      
        const order = await OrderModel.findOneAndUpdate(
          { sessionId: session.id },
          { status: 'Paid', }, 
          { new: true }
        );

        if (!order) {
          console.error('Order not found for session ID:', session.id);
          return new NextResponse('Order not found', { status: 404 });
        }

        console.log('Order updated successfully:', order);
      } catch (err) {
        console.error('Failed to update order:', err);
        return new NextResponse('Internal Server Error', { status: 500 });
      }
      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new NextResponse(null, { status: 200 });
}

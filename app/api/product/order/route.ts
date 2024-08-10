import { connectdb } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { OrderModel } from "@/models/OrderModels";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/helper/authOption";
export const dynamic = "force-dynamic"
export async function GET(req: NextRequest): Promise<NextResponse> {
  console.log('incoming request')
  try {
    await connectdb();

   
    const session = await getServerSession({ req, ...authOptions });

    if (!session || !session.id) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const userId = session.id;
    const orderList = await OrderModel.find({ userId }).sort({ createdAt: -1 });
   

    return NextResponse.json({ data: orderList }, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ data: "Failed to load data" }, { status: 500 });
  }
}



import { connectdb } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { OrderModel } from "@/models/OrderModels";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/helper/authOption";



export async function GET(req: NextRequest, res: NextResponse){
 try {
  await connectdb()
   const usersession =await getServerSession(authOptions);
   const userId=usersession.id;

   const orderList=await OrderModel.find({userId}).sort({createdAt:-1})
  
    return NextResponse.json({data:orderList},{status:200})
  
 } catch (error) {

    console.log(error)
    return NextResponse.json({data:"Failed to load data"},{status:500})
  
 }
      
   


}
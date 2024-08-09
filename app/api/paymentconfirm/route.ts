import { connectdb } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { OrderModel } from "@/models/OrderModels";

export async function POST(req:NextRequest){
    try {
       await connectdb()

       const {sessionId}=await req.json()
       console.log(sessionId)
       const order=await OrderModel.findOneAndUpdate({sessionId:sessionId},{status:'completed'},{new:true})
       console.log(order)

    
       return NextResponse.json({data:order},{status:200})
      

    } catch (error) {
        console.log(error)
         return NextResponse.json({data:"failed to update data"},{status:500})
        
    }

}
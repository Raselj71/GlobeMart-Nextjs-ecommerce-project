import { connectdb } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { User } from "@/models/usermodel";

connectdb()

export async function GET(request:NextRequest){

   try {
          const authtoken=request.cookies.get("authToken")?.value;
    
    if(!authtoken){
        return NextResponse.json(
        { message: "User not loggin !", success: false },
        { status: 404 }
     )
    }

    const data=jwt.verify(authtoken,process.env.JWT_KEY);

    const user=await User.findById(data.id).select("-password")


    return NextResponse.json(user)
   } catch (error) {
      return NextResponse.json(
        { message: error, success: false },
        { status: 404 }
     )
    
   }

}
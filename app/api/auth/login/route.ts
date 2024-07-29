import bcrypt from "bcrypt";
import { User } from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import { connectdb } from "@/config/db";

connectdb()
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid Credentials", success: false },
        { status: 400 }
      );
    }
    const matchpasswod =await bcrypt.compare(password, user.password);
     if(!matchpasswod){
         return NextResponse.json(
        { message: "Invalid Credentials", success: false },
        { status: 400 }
      );
     }
   
     const token=jwt.sign({id:user.id,name:user.name, email:user.email},process.env.JSON_KEY ||"rasel")
     const response=NextResponse.json({
         message:"succesfull login",
         success:true
     },{status:200})

const expirationTime = new Date();
expirationTime.setHours(expirationTime.getHours() + 1);

     response.cookies.set("authToken", token, {
      expires:expirationTime,
      httpOnly:true

    });
   

    return response
  } catch (error) {
    console.log(error)
     return NextResponse.json(
        { message: "failed to login", success: false },
        { status: 400 }
      );
  }
}

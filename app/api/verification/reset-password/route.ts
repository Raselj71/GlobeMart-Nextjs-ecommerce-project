import jwt, { JsonWebTokenError, TokenExpiredError , JwtPayload  } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server';
import { User } from '@/models/usermodel';
import { connectdb } from '@/config/db';
export async function POST(request: Request){
    const conn=await connectdb()

    try {
        const salt:String="10"
       const {password, token}= await request.json()
         
        


         const decode=await jwt.verify(token.token,process.env.JWT_KEY!) as JwtPayload;
         console.log(decode)
         const id=decode.id ;

         const hashpassword=await bcrypt.hash(password, 10);
         console.log(hashpassword)
         const update=await User.findByIdAndUpdate({_id:id}, {password:hashpassword}) 

        

         return NextResponse.json(
        { message: "password is changed", success: true },
        { status: 200 }
     )
         

    } catch (error) {
        if( error instanceof TokenExpiredError){
       return NextResponse.json(
        { message: "Email is expired", success: false },
        { status: 400 }
     )
        }

        console.log(error)
       
        
    }

}
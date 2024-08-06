
import { sendmail } from '@/config/email'
import { User } from '@/models/usermodel'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'


export async function POST(request:Request){

   try {
        const{email}= await request.json()

    const user=await User.findOne({email})
    if(!user){
     return NextResponse.json(
        { message: "User not found !", success: false },
        { status: 404 }
     )
    }

    const token=jwt.sign({id:user.id,email:user.email},process.env.JWT_KEY!,{
        expiresIn:'50m'
    })
     



const template=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333333;
    }

    p {
      color: #666666;
    }

    .button {
      display: inline-block;
      background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
    }

    .button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Reset Your password</h1>
    <p>For resetting your password. Please click reset button! , please reset your password by clicking the button below:</p>
    <a href="${process.env.BASE_URL}/forget-password/${token}" class="button">Reset Password</a>
    <p>If you did not create an account with Globemart, you can safely ignore this email.</p>
    <p>Thank you,<br>Globemart Team</p>
  </div>
</body>
</html>
 `

  const response= await sendmail(email,"Reset Password",template)
  return NextResponse.json(
        { message: "email send !", success: true },
        { status: 200 }
     )

   } catch (error) {
    console.log(error)

    
   }
}
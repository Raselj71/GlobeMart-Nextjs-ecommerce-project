import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/models/usermodel";
import { connectdb } from "@/config/db";
import { sendmail } from "@/config/email";


connectdb();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    console.log(name);
    const hashpasword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email,
      password,
    });

    user.password = hashpasword;

    const uploaduser = await user.save();
     
     const response= await sendmail(email,"Verify your account", "test")
     console.log(response)
   
    return NextResponse.json(
      { message: "user created", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Email already used", success: false },
      { status: 404 }
    );
  }
}

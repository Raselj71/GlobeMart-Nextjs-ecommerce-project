import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/models/usermodel";
import { connectdb } from "@/config/db";






export async function POST(request: Request) {
  const conn=await connectdb()
  try {
    const { name, email, password } = await request.json();
    

    const user=await User.find({email});
    if(user.length>0){
      return new NextResponse("user Already Exist",{
        status:404,
        statusText:"User Already Exits"
      })
    }
    
    const hashpasword = await bcrypt.hash(password, 10);
    const NewUser = new User({
      name: name,
      email,
      password,
    });


   NewUser.password = hashpasword;

    const uploaduser = await NewUser.save();
     
    //  const response= await sendmail(email,"Verify your account", "test")
    //  console.log(response)
   
    return new NextResponse("user registration successfull",{
      status:201,
      statusText:"Successfull"
    })
  } catch (error) {
    console.log(error);
   return new NextResponse("server error",{
        status:404,
        statusText:"server error"
      })
  }
}

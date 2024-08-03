import mongoose,{Connection} from "mongoose";


export async function connectdb(){
     
  try{
    const conn=await mongoose.connect(String(process.env.MONGODB))
    return conn;
     
  }catch(error){
      console.log(error)
  }

}


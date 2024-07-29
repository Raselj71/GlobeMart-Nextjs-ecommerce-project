import mongoose from "mongoose";

const userschema= new mongoose.Schema({
   name :{
     type:String,
     required:[true, "Name is required"]
   },
   email:{
    type: String,
     unique:true,
     required:[true, "email is required"]
   },
   password:{
    type: String,
    required: [true, "password is required"]
   },
   verification:{
      required:true,
      type: String,
      enum :['verifiend','nonverified'],
      default:'nonverified'
   },
   createAt:{
    type: Date,
    default: Date.now
   }

})


export const User =
  mongoose.models.users || mongoose.model("users", userschema);

import mongoose from "mongoose";

let isConnected = false; 

export async function connectdb() {
  if (isConnected) {
    console.log("already connected")
    return;
  }

  try {
    const conn = await mongoose.connect(String(process.env.MONGODB), {
      serverSelectionTimeoutMS: 5000, 
      socketTimeoutMS: 45000, 
      connectTimeoutMS: 10000, 
    });
    isConnected = true;
    console.log('database connected')
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; 
  }
}

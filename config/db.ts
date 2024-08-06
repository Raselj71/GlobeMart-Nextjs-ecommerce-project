import mongoose from "mongoose";

export async function connectdb() {
  try {
    console.log("Connecting to MongoDB...");
    const conn = await mongoose.connect(String(process.env.MONGODB));
    console.log("Connected to MongoDB:", conn.connection.name);
    return conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Ensure the error is rethrown for proper error handling
  }
}

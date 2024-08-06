import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export async function connectdb() {
  if (isConnected) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    const conn = await mongoose.connect(String(process.env.MONGODB), {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      connectTimeoutMS: 10000, // Timeout after 10 seconds for initial connection
    });
    isConnected = true;
    console.log("Connected to MongoDB:", conn.connection.name);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Ensure the error is rethrown for proper error handling
  }
}

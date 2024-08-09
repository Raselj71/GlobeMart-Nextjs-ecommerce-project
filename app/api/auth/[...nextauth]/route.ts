import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/usermodel";
import bcrypt from "bcrypt";
import { connectdb } from "@/config/db";
import { authOptions } from "@/helper/authOption";


 

 const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };

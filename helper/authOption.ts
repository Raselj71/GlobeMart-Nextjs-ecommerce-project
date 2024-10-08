
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/usermodel";
import bcrypt from "bcrypt";
import { connectdb } from "@/config/db";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as const,
    maxAge:2*60*60 
  },
  secret: process.env.NEXTAUTH_SECRET,


    callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.userid=user._id
        
      }
      return token;
    },
    async session({ session, token }:any) {
      if (token) {
        session.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id=token.userid
        
        
      }
      return session;
    },

},

  providers: [
    CredentialsProvider({
      name: "credential",

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const conn=await connectdb()
        if (credentials === null) {
          return null;
        } else {
          try {
            const user = await User.findOne({
              email: credentials?.email,
            });
            
            if (user && credentials?.password) {
              const isMatch = await bcrypt.compare(
                credentials.password,
                user.password
              );

              if (isMatch) {
                return user;
              } else {
                throw new Error("Email or Password is not correct");
              }
            } else {
              throw new Error("User not found");
            }
          } catch (error) {
            throw new Error("Failed to authorized");
          }
        }
      },
    }),
  ],


  
};
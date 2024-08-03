import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/usermodel";
import bcrypt from "bcrypt";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,


    callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.password = user.password; // Add other fields you want to include
      }
      return token;
    },
    async session({ session, token }:any) {
      if (token) {
        session.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.password=token.password
        
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
        if (credentials === null) {
          return null;
        } else {
          try {
            const user = await User.findOne({
              email: credentials?.email,
            });
            console.log(user);
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

export const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };

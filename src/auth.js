import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
});

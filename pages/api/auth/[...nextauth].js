import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { firebaseConfig, db } from "../../../firebase";



export default NextAuth({
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    ...firebaseConfig  
  }),
  pages: {
    signIn: "/signin",
  },

  db: db,
  
});
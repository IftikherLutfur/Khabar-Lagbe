import { ConnectDB } from "@/lib/ConnectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const authOption = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", required: true, placeholder: "Enter email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter password" }
            },

            async authorize(credentials) {
                const {email, password} = credentials;
                if (!email || !password) {
                    return null
                }

                    // const currentUser = user.find((user)=>user.email === email)
                    const db = await ConnectDB()
                    const currentUser =await db.collection('users').findOne({email})
                     console.log(currentUser);
                     if(!currentUser){
                      return null;
                     }
                      
                     const passworMatched = bcrypt.compareSync(password, currentUser.password);
                     if(!passworMatched){
                      return null;
                     }
                     return currentUser;
            }


        }),
        GoogleProvider({
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],

    callbacks : {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.type = user.type
              token.id = user.id
            }
            return token; 
          },
        async session({ session, token }) {
            session.user.type = token.type
            return session;
          },
    },
    pages:{
      signIn: 'signin'
    }
}
const handler = NextAuth(authOption)


  

export { handler as GET, handler as POST }
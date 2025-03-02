import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

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
                if (!credentials) {
                    return null
                }

                if(email){
                    const currentUser = user.find((user)=>user.email === email)
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser
                        }}}
                return null
            }


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
    }
}
const handler = NextAuth(authOption)

const user = [
    {
      "id": 1,
      "email": "user1@example.com",
      "password": "password123",
      "type": "admin"
    },
    {
      "id": 2,
      "email": "user2@example.com",
      "password": "securePass456",
      "type": "admin"
    },
    {
      "id": 3,
      "email": "user3@example.com",
      "password": "mySecret789",
      "type": "admin"
    }
  ]
  

export { handler as GET, handler as POST }
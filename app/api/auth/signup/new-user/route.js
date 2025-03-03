import { ConnectDB } from "@/lib/ConnectDB"

export const POST = async (request) =>{
    try {
        const db = await ConnectDB()
        const userCollection = db.collection('users')
        const newUser = await request.json();
        const res = await userCollection.insertOne(newUser)
        return Response.json({message:"New user created"})
    } catch (error) {
        return Response.json({message:"Something went wrong"})
    }
}
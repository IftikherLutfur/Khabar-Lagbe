import { ConnectDB } from "@/lib/ConnectDB"
import { NextResponse } from "next/server"

export const DELETE = async (req,{params}) => {
    try {
       
        const {email} = params;
        if(!email){
            return NextResponse.json({
                success: false,
                message: "User email is valid",
                status: 400
            })
        }

        const db = await ConnectDB()
        const result = await db.collection("cart").deleteMany({userEmail: email})
        return NextResponse.json({
            success: true,
            message: "This user's all food item has been deleted",
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `This request failed due to ${error}`,
            status: 500
        })
    }
}
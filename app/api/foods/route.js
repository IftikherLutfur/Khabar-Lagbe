
import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await ConnectDB();
        const foodCollection = db.collection('foods')
        const foods = await foodCollection.find().toArray()
        return NextResponse.json(
            { foods, message: "Successfully gets the foods data" }, { status: 200 }
        )
    } catch (error) {
        console.error("Feting error", error)
        return NextResponse.json(
            { message: "Somehing went wrong", status: 500 }
        )

    }
}
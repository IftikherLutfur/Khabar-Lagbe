
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


export const POST = async (req) => {
    try {
        const db = await ConnectDB();
        const foodCollection = db.collection('foods');
        const foodData = await req.json();
        // const imageUrl = await uploadImageToImgbb(foodData.image[0]);

        const food = await foodCollection.insertOne(
           foodData);

        return NextResponse.json({ message: "Inserted Data", food }, { status: 200 });
    } catch (error) {
        console.error("Error during form submission:", error); // Log the error for better insight
        return NextResponse.json({ message: error.message || "Something went wrong" }, { status: 500 });
    }
};


  
  
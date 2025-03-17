import { ConnectDB } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const db = await ConnectDB();
    const foodCollection = db.collection("foods");

    const food = await foodCollection.findOne({ _id: new ObjectId(params.id) });

    if (!food) {
      return NextResponse.json({ message: "Food not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Food found", data: food }, { status: 200 });
  } catch (error) {
    console.error("Error fetching food:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};

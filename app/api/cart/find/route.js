import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const db = await ConnectDB();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    console.log("Query Email:", email);

    const cartCollection = db.collection("cart");

    // Corrected: match userEmail field
    const cartItems = await cartCollection.find({ userEmail: email }).toArray();
    console.log("Found Cart Items:", cartItems);

    if (!cartItems.length) {
      return NextResponse.json(
        { message: "No cart items found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Cart items found",
        cartItems,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
};

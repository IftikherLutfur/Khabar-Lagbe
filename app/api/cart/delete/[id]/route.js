import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { ConnectDB } from "../../../../../lib/ConnectDB";

export const DELETE = async (req, { params }) => {
  try {
    const db = await ConnectDB();
    const { id } = params;

    const cartCollection = db.collection("cart");
    const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json( 
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Cart item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
};

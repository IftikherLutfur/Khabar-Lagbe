import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/ConnectDB";

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const tran_id = searchParams.get("tran_id");

    if (!tran_id) {
      return NextResponse.json({ message: "Invalid transaction" }, { status: 400 });
    }

    const db = await ConnectDB();
    const paymentCollection = db.collection("payments");

    // Update the payment status in the database
    await paymentCollection.updateOne({ transactionId: tran_id }, { $set: { status: "Failed" } });

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/api/fail`);
  } catch (error) {
    console.error("Payment failure handling error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};

// const { ConnectDB } = require("@/lib/ConnectDB")
// const { NextResponse } = require("next/server")

// const POST = async (req) => {
//     const db = await ConnectDB()
//     try {
//         const userCollection = db.collection("users")
//         const addToCart = db.collection("cart")

//         const { amount, foodName, userEmail } = await req.json()

//         const user = await userCollection.findOne({ email: userEmail })

//         if(user){
//             const cartItem = {
//                 amount,
//                 foodName,
//                 userEmail
//             }
//             const result =  await addToCart.insertOne(cartItem)
//             return NextResponse.json({message:"Data added successfully", result}, {status:200})
//         }
//         else{
//             return NextResponse.json({message:"Something went wrong"}, {status:500})
//         }
//     } catch (error) {
//       return NextResponse.json({nessage:"Not found"}, {status:404})
//     }
// }
import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  const db = await ConnectDB();
  try {
    // Get the user collection and the cart collection
    const userCollection = db.collection("users");
    const addToCart = db.collection("cart");

    // Destructure the request body
    const { amount, foodName, userEmail } = await req.json(); // Use await req.json() to parse the JSON body

    // Validate if the required fields are present
    if (!amount || !foodName || !userEmail) {
      return NextResponse.json(
        { message: "Amount, food name, and user email are required" },
        { status: 400 }
      );
    }

    // Check if the user exists in the database
    const user = await userCollection.findOne({ email: userEmail });

    if (user) {
      // If the user exists, create the cart item
      const cartItem = {
        amount,
        foodName,
        userEmail,
      };

      // Insert the cart item into the cart collection
      const result = await addToCart.insertOne(cartItem);

      return NextResponse.json(
        { message: "Item added to cart successfully", result },
        { status: 200 }
      );
    } else {
      // If the user does not exist
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    // Handle any other errors
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { message: "Something went wrong, please try again" },
      { status: 500 }
    );
  }
}

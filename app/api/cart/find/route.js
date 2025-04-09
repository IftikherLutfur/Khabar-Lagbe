// // Backend (API)
// import { ConnectDB } from "@/lib/ConnectDB";
// import { NextResponse } from "next/server";

// export const GET = async (req) => {
//   const db = await ConnectDB();
//   try {
//     const url = new URL(req.url);  // Create URL object from request URL
//     const email = url.searchParams.get("email"); // Extract email from query params

//     if (!email) {
//       return NextResponse.json({ message: "Email is required" }, { status: 400 });
//     }

//     const userCollection = await db.collection("user");
//     const cartCollection = await db.collection("cart");

//     const userEmailCheck = await userCollection.findOne({ email });
//     const cartEmailCheck = await cartCollection.findOne({ email });

//     if (userEmailCheck && cartEmailCheck && userEmailCheck.email === cartEmailCheck.email) {
//       const result = await cartCollection.find({ email }).toArray();
//       return NextResponse.json(
//         { message: "Email match", cartItems: result },
//         { status: 200 }
//       );
//     } else {
//       return NextResponse.json(
//         { message: "Email doesn't match or cart is empty" },
//         { status: 404 }
//       );
//     }
//   } catch (error) {
//     console.error("Fetching error", error);
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// };

import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const db = await ConnectDB();

        // Email query parameter extract korte hobe URL theke
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const userCollection = db.collection("user");
        const cartCollection = db.collection("cart");

        const user = await userCollection.findOne({ email });
        console.log(user);
        
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const cartItems = await cartCollection.find({ email }).toArray();
        if (cartItems.length === 0) {
            return NextResponse.json({ message: "No cart items found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Cart items found", cartItems },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching cart:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};


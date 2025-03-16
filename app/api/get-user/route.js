// import { ConnectDB } from "@/lib/ConnectDB";
// import { ObjectId } from "mongodb";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//     try {
//         const db = await ConnectDB();
//         const userCollection = db.collection('users')
//         const users = await userCollection.find().toArray()
//         return NextResponse.json({ users, message: "Succesfully gets the users" }, { status: 200 })

//     } catch (error) {
//         console.error("Error to get users data")
//         return NextResponse.json(
//             { message: "Something went wrong" }, { status: 404 }
//         )
//     }
// }

// export const DELETE = async () => {

//     try {
//         const db = await ConnectDB()
//         const userCollection = db.collection("user")

//         const url = new URL(req.url)
//         const id = url.searchParams.get("id")

//         if (!id) {
//             return NextResponse.json({ message: "User id is required" }, { status: 400 })
//         }
//         const result = await userCollection.deleteOne({ _id: new ObjectId(id)})

//         if(result.deletedCount === 0){
//             return NextResponse.json({message:"User not find"}, {status:404})
//         }

//         return NextResponse.json({message:"User deleted successfully"}, {ststus:200})

//     } catch (error) {
//         console.error("Error deleting user")

//         return NextResponse.json({message:"Something went wrong"}, {ststus:500})

//     }

// }
import { ConnectDB } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await ConnectDB();
    const userCollection = db.collection("users");
    const users = await userCollection.find().toArray();
    return NextResponse.json({ users, message: "Successfully retrieved users" }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const db = await ConnectDB();
    const userCollection = db.collection("users");
    
    const result = await userCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ message: "Failed to delete user" }, { status: 500 });
  }
};
export const PATCH = async (req) => {
    try {
      const { id, type } = await req.json();
  
      const db = await ConnectDB();
      const userCollection = db.collection("users");
  
      const updatedUser = await userCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { type } }
      );
  
      if (updatedUser.modifiedCount > 0) {
        return NextResponse.json({ message: "User updated successfully" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "No user updated" }, { status: 400 });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
  };

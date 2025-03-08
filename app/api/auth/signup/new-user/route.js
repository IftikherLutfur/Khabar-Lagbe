import { ConnectDB } from "@/lib/ConnectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const db = await ConnectDB();
        const userCollection = db.collection("users");
        const newUser = await request.json();

        // Check if the email already exists
        const existingUser = await userCollection.findOne({ email: newUser.email });
        if (existingUser) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({ ...newUser, password: hashedPassword });

        return NextResponse.json({ message: "New user created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
};

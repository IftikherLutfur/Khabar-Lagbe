import { MongoClient, ServerApiVersion } from "mongodb";

let db; // Cache the database connection

export const ConnectDB = async () => {
    if (db) return db; // Return cached DB connection if available

    try {
        // Load the MongoDB URI from environment variables
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        
        // Log the URI for debugging (ensure it's not exposed in production)

        // Throw an error if the URI is not defined
        if (!uri) {
            throw new Error("MongoDB URI is not defined in environment variables");
        }

        // Create a new MongoDB client instance
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        // Connect to the MongoDB server
        await client.connect();

        // Select the database and cache it
        db = client.db("khabar-lagbe");
        
        // Log success message
        console.log("Connected to MongoDB");

        return db; // Return the database instance

    } catch (error) {
        // Log the error details
        console.error("Failed to connect to MongoDB", error);

        // Throw a custom error to be handled by the calling function
        throw new Error("Failed to connect to MongoDB");
    }
};

// Test the connection (optional debugging)
(async () => {
    try {
        await ConnectDB();
    } catch (error) {
        console.error("Error in connecting to the database:", error);
    }
})();

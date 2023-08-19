import mongoose from "mongoose";


export async function connectDB() {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL environment variable is not set.");
        }

        await mongoose.connect(process.env.MONGO_URL, {
          
            
            dbName: "app"
        });

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        });

        connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
            process.exit(1);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

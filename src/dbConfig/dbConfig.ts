import { log } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection error. please make sure MongoDB is running. ' + err);
            process.exit();
            
        });
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
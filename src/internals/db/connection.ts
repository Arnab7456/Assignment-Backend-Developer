import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL || "";
export const connectDB = async () => {
    try {
      const connectionDB = await mongoose.connect(MONGODB_URL || "");
        console.log(`MongoDB connected to ${connectionDB.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
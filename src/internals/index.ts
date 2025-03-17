import express from "express";
import { connectDB } from "./db/connection";
const app = express();
app.use(express.json());

async function startServer() {
    connectDB();
    try {
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
startServer();
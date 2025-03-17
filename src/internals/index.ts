import express from "express";
import { connectDB } from "./db/connection";
const app = express();
app.use(express.json());
import userRoutes from "./User/user.route";

app.use("/api/user", userRoutes);

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
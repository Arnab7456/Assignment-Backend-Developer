import UserModel  from "./user.model";
import CreateUserSchema from "./user.schema";
import { Router } from "express";
import bcrypt from "bcryptjs";
const router = Router();

export const signup =  async (req : any, res : any) => {
    try {
        const parsedData = CreateUserSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({ error: parsedData.error.message });
        }
        const { name, email, password, age } = parsedData.data;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ name, email, password: hashedPassword, age });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};
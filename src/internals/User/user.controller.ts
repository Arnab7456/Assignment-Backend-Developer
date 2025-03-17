import UserModel  from "./user.model";
import CreateUserSchema from "./user.schema";
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "";
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
export const login = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare password with the hashed one in the DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};

export const getAlluser = async (req: any, res: any) => {
    try {
        const users = await UserModel.find().select("-password");
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};

export const getUserById = async (req : any, res : any) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};

export const updateUser = async (req : any, res : any) => {
    try {
        const { id } = req.params;
        const { name, email, password, age } = req.body;
        const user = await UserModel.findByIdAndUpdate(id, { name, email, password, age }, { new: true }).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};

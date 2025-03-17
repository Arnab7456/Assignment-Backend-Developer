import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age must be positive"],
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", UserSchema);

export default UserModel;

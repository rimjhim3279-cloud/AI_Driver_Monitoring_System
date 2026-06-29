import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  // Check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};
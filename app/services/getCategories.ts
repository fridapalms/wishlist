import { connectDB } from "../lib/db";
import { Category } from "../models/Category";

export const getCategories = async () => {
  try {
    await connectDB();
    return await Category.find().lean();
  } catch (error) {
    console.error("Failed to fetch categories: ", error);
    return [];
  }
};

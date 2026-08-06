import { connectDB } from "../lib/db";
import { Category } from "../models/Category";

export const getCategories = async () => {
  try {
    await connectDB();
    const categories = await Category.find().lean();

    return categories.map((category) => ({
      _id: category._id.toString(),
      name: category.name,
    }));
  } catch (error) {
    console.error("Failed to fetch categories: ", error);
    return [];
  }
};

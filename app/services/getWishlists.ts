import { connectDB } from "../lib/db";
import { WishList } from "../models/WishList";

export const getWishlists = async () => {
  try {
    await connectDB();
    return await WishList.find().lean();
  } catch (error) {
    console.error("Failed to fetch wishlists: ", error);
    return [];
  }
};

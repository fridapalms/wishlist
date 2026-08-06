import { connectDB } from "../lib/db";
import { WishList } from "../models/WishList";

export const getWishlists = async () => {
  try {
    await connectDB();
    const wishlists = await WishList.find().lean();

    return wishlists.map((wishlist) => ({
      _id: wishlist._id.toString(),
      name: wishlist.name,
    }));
  } catch (error) {
    console.error("Failed to fetch wishlists: ", error);
    return [];
  }
};

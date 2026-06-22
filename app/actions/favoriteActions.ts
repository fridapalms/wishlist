"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { Favorite } from "../models/Favorite";

export const createFavorite = async (formData: FormData) => {
  //Anslut till databas
  await connectDB();

  //Mutera data
  const category = formData.get("category") as string;
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const link = formData.get("link") as string;
  const imageUrl = formData.get("imageUrl") as string;

  await Favorite.create({
    title: title,
    price: price,
    link: link,
    imageUrl: imageUrl,
    category: category,
  });

  //Rendera om
  revalidatePath("/");
};

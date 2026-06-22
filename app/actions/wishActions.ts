"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { Wish } from "../models/Wish";

export const createWish = async (formData: FormData) => {
  //Anslut till databas
  await connectDB();

  //Mutera data
  type Priority = "low" | "medium" | "high";

  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const link = formData.get("link") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const priority = formData.get("priority") as Priority;
  const notes = formData.get("notes") as string;
  const wishlistId = formData.get("wishlistId") as string;
  const categoryId = formData.get("categoryId") as string;

  await Wish.create({
    title: title,
    price: price,
    link: link,
    imageUrl: imageUrl,
    purchased: false,
    priority: priority,
    notes: notes,
    wishlistId: wishlistId,
    categoryId: categoryId,
  });

  //Rendera om
  revalidatePath("/");
};

export const togglePurchase = async (id: string) => {
  await connectDB();

  const found = await Wish.findById(id);
  if (!found) return;
  await Wish.findByIdAndUpdate(id, { purchased: !found.purchased });

  revalidatePath("/");
};

export const deleteWish = async (id: string) => {
  await connectDB();

  await Wish.findByIdAndDelete(id);

  revalidatePath("/");
};

"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { WishList } from "../models/WishList";
import { Wish } from "../models/Wish";

export const createWishList = async (formData: FormData) => {
  //Anslut till databas
  await connectDB();

  //Mutera data
  const name = formData.get("wishListName") as string;

  await WishList.create({
    name: name,
  });

  //Rendera om
  revalidatePath("/");
};

export const togglePurchase = async (id: string) => {
  await connectDB();

  const found = await Wish.findOne({ id });
  await Wish.updateOne({ id }, { purchased: !found.purchased });

  revalidatePath("/");
};

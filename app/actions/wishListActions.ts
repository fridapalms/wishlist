"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { WishList } from "../models/WishList";
import { Wish } from "../models/Wish";
import { auth } from "@/auth";

export const createWishList = async (formData: FormData) => {
  //Anslut till databas
  await connectDB();

  const session = await auth();

  //Mutera data
  const name = formData.get("wishListName") as string;

  await WishList.create({
    name: name,
    userId: session?.user.id,
  });

  //Rendera om
  revalidatePath("/");
};

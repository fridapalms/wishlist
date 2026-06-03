"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { Category } from "../models/Category";

export const createCategory = async (formData: FormData) => {
  //Anslut till databas
  await connectDB();

  //Mutera data
  const name = formData.get("categoryName") as string;

  await Category.create({
    name: name,
  });

  //Rendera om
  revalidatePath("/");
};

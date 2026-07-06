import { connectDB } from "../lib/db";
import { CategoryType } from "../models/Category";
import Link from "next/link";
import { getCategories } from "../services/getCategories";
import { categoryColors } from "./FavoriteCard";

export const AllCategories = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i db
  const categories: CategoryType[] = await getCategories();

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-wrap gap-5 justify-start">
      {categories.map((c) => (
        <div key={c._id}>
          <Link href={`/categories/${c._id}`}>
            <div className={`${categoryColors[c.name]} rounded-full p-4 flex flex-col justify-center items-center text-center gap-3 w-[250px] h-[250px] text-[var(--color-darkgreen)]`}>
              <div>
                <h1 className={`font-semibold text-3xl ${c.name === "Lifestyle" ? "text-[var(--color-lightyellow)]" : "text-[var(--color-green)]"}`}>{c.name}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

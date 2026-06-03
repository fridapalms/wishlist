import { connectDB } from "../lib/db";
import { Category, CategoryType } from "../models/Category";
import Link from "next/link";

export const AllCategories = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i db
  const categories: CategoryType[] = await Category.find();

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-wrap gap-5 justify-start">
      {categories.map((c) => (
        <div key={c._id}>
          <Link href={`/categories/${c._id}`}>
            <div className="bg-[#BF5048] rounded-sm p-4 flex flex-col justify-center items-center gap-3 w-[300px] h-[300px] text-[#353333]">
              <div>
                <h1 className="font-bold text-3xl text-[#F9F4E7]">{c.name}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

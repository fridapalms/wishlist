import { connectDB } from "../lib/db";
import { WishList, WishListType } from "../models/WishList";
import Link from "next/link";

export const AllLists = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i db
  const wishlists: WishListType[] = await WishList.find();

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-wrap gap-5 justify-start">
      {wishlists.map((w) => (
        <div key={w._id}>
          <Link href={`/wishlists/${w._id}`}>
            <div className="bg-[#BF5048] rounded-sm p-4 flex flex-col justify-center items-center gap-3 w-[250px] h-[250px] text-[#353333]">
              <div>
                <h1 className="font-bold text-3xl text-[#F9F4E7]">{w.name}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

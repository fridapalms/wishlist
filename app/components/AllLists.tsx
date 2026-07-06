import { connectDB } from "../lib/db";
import { WishListType } from "../models/WishList";
import Link from "next/link";
import { getWishlists } from "../services/getWishlists";

export const AllLists = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i db
  const wishlists: WishListType[] = await getWishlists();

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-wrap gap-5 justify-start">
      {wishlists.map((w) => (
        <div key={w._id}>
          <Link href={`/wishlists/${w._id}`}>
            <div className="bg-[var(--color-lightyellow)] transition delay-100 ease-in-out hover:bg-[var(--color-yellow)] rounded-full p-4 flex flex-col justify-center items-center text-center gap-3 w-[250px] h-[250px] text-[var(--color-darkgreen)]">
              <div>
                <h1 className="font-semibold text-3xl text-[var(--color-green)]">{w.name}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

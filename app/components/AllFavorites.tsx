import { connectDB } from "../lib/db";
import { Favorite } from "../models/Favorite";
import { FavoriteCard } from "./FavoriteCard";

export const AllFavorites = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla favorites i db
  const favorites = await Favorite.find().lean();

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-col gap-6 md:p-16 p-8 ">
      <h1 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">our july favorites</h1>

      <div className="flex flex-row flex-wrap gap-5 justify-start w-full">
        {favorites.map((f) => (
          <FavoriteCard key={f._id} f={f} />
        ))}
      </div>
    </div>
  );
};

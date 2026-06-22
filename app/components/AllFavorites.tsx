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
    <div className="flex flex-row flex-wrap gap-5 justify-start">
      {favorites.map((f) => (
        <FavoriteCard key={f._id} f={f} />
      ))}
    </div>
  );
};

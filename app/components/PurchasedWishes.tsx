import { connectDB } from "../lib/db";
import { Wish } from "../models/Wish";
import { WishCard } from "./WishCard";

export const PurchasedWishes = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i db
  const wishes = await Wish.find({ purchased: true }).lean();

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-wrap gap-5 justify-start">
      {wishes.map((w) => (
        <div key={w._id}>
          <WishCard w={w} />
        </div>
      ))}
    </div>
  );
};

import { connectDB } from "../lib/db";
import { Wish } from "../models/Wish";
import { PageNavigation } from "./PageNavigation";
import { WishCard } from "./WishCard";
import { Plus } from "lucide-react";
import Link from "next/link";

export const PurchasedWishes = async () => {
  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i db
  const wishes = await Wish.find({ purchased: true }).lean();

  if (wishes.length === 0) {
    return (
      <div className="flex flex-col gap-8 md:p-6 p-2">
        <PageNavigation
          items={[
            { label: "Home", href: "/" },
            { label: "Purchased wishes", href: "/purchased" },
          ]}
        />
        <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Oops, no items are marked as purchased. Time for some shopping?</h3>
      </div>
    );
  }

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-col gap-8 md:p-6 p-2">
      <PageNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Purchased wishes", href: "/purchased" },
        ]}
      />

      <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Purchased</h3>
      <div className="flex flex-wrap gap-5 justify-start">
        {wishes.map((w) => (
          <div key={w._id}>
            <WishCard w={w} />
          </div>
        ))}
      </div>
    </div>
  );
};

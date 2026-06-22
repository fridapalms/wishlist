import Image from "next/image";
import Link from "next/link";
import { TogglePurchased } from "./TogglePurchased";
import { DeleteWish } from "./DeleteWish";
import { PriorityLow } from "./PriorityLow";
import { PriorityMedium } from "./PriorityMedium";
import { PriorityHigh } from "./PriorityHigh";
import { FavoriteType } from "../models/Favorite";

type FavoriteCardProps = {
  f: FavoriteType;
};

export const FavoriteCard = ({ f }: FavoriteCardProps) => {
  return (
    <div className="border border-dashed border-[var(--color-borderbeige)] rounded-sm p-4 flex flex-col gap-3 flex-1 justify-between text-start">
      <div className="flex items-center gap-2">
        {f.category === "Beauty" && <div className="w-[50px] h-[50px] bg-[var(--color-pink)]"></div>}
        {f.category === "Home" && <div className="w-[50px] h-[50px] bg-[var(--color-yellow)]"></div>}

        <h2 className="font-semibold text-3xl text-black">{f.category}</h2>
      </div>
      <Link href={f.link} className="flex flex-col gap-3">
        <Image alt={f.title} src={f.imageUrl} width={200} height={200} className="w-full aspect-[1/1] object-cover"></Image>
        <div>
          <h1 className="font-bold text-black">{f.title}</h1>
          <h1 className="text-black">Price: {f.price} SEK</h1>
        </div>
      </Link>
    </div>
  );
};

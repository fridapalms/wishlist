import { WishType } from "../models/Wish";
import Image from "next/image";
import Link from "next/link";
import { TogglePurchased } from "./TogglePurchased";
import { DeleteWish } from "./DeleteWish";
import { PriorityLow } from "./PriorityLow";
import { PriorityMedium } from "./PriorityMedium";
import { PriorityHigh } from "./PriorityHigh";

type WishCardProps = {
  w: WishType;
};

export const WishCard = ({ w }: WishCardProps) => {
  return (
    <div className="border-2 border-dashed border-[var(--color-beige-800)] rounded-sm p-3 flex flex-col flex-1 min-w-[250px] gap-3 justify-between text-start">
      {w.purchased ? (
        <Link href={w.link} className="flex flex-col gap-3 h-full">
          <Image alt={w.title} src={w.imageUrl} width={200} height={200} className="w-full aspect-[1/1] object-cover rounded-lg opacity-25"></Image>
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-semibold text-xl text-[var(--color-darkred)]">{w.title}</h1>
            <h1 className="opacity-25">Price: {w.price} kr</h1>
            <p className="opacity-25">{w.notes}</p>
            <h3 className="font-bold opacity-100">Already purchased!</h3>
          </div>
        </Link>
      ) : (
        <Link href={w.link} className="flex flex-col gap-3 h-full">
          <Image alt={w.title} src={w.imageUrl} width={200} height={200} className="w-full aspect-[1/1] object-cover rounded-lg"></Image>
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-semibold text-xl text-[var(--color-darkred)]">{w.title}</h1>
            <h1>Price: {w.price} kr</h1>
            <p>{w.notes}</p>
            {w.priority === "low" && <PriorityLow />}
            {w.priority === "medium" && <PriorityMedium />}
            {w.priority === "high" && <PriorityHigh />}
          </div>
        </Link>
      )}
      <div className="flex gap-2">
        <TogglePurchased id={w._id.toString()} />
        <DeleteWish id={w._id.toString()} />
      </div>
    </div>
  );
};

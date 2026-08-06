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
    <div className={`border-2 border-dashed border-[var(--color-beige-800)] ${w.purchased ? "bg-[var(--color-lightpink)]" : ""} rounded-sm p-3 flex flex-col w-[260px] gap-3 text-start`}>
      <Link href={w.link} className="flex flex-col gap-3 h-full">
        <div className={`w-full h-[350px] overflow-hidden rounded-lg flex items-center justify-center bg-white ${w.purchased ? "opacity-50" : ""} `}>
          <Image alt={w.title} src={w.imageUrl} width={500} height={500} className="w-full object-contain"></Image>
        </div>
        <div className="flex flex-col gap-2 h-[150px] justify-between">
          <h1 className={`font-semibold text-xl text-[var(--color-darkgreen)] ${w.purchased ? "opacity-50" : ""}`}>{w.title}</h1>
          <div className="flex flex-col gap-2">
            <h2 className="opacity-50">Price: {w.price} kr</h2>
            {w.purchased ? (
              <h3 className="font-bold opacity-100">Already purchased!</h3>
            ) : (
              <>
                {w.priority === "low" && <PriorityLow />}
                {w.priority === "medium" && <PriorityMedium />}
                {w.priority === "high" && <PriorityHigh />}
              </>
            )}
          </div>
        </div>
      </Link>
      <div className="flex gap-2">
        <TogglePurchased id={w._id.toString()} />
        <DeleteWish id={w._id.toString()} />
      </div>
    </div>
  );
};

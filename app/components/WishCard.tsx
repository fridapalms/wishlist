import { WishType } from "../models/Wish";
import Image from "next/image";
import Link from "next/link";
import { TogglePurchased } from "./TogglePurchased";
import { DeleteWish } from "./DeleteWish";

type WishCardProps = {
  w: WishType;
};

export const WishCard = ({ w }: WishCardProps) => {
  return (
    <div className="border border-[#DFC6C0] rounded-sm p-4 flex flex-col gap-3 w-[250px] h-[600px] text-[#353333] justify-between">
      {w.purchased ? (
        <Link href={w.link} className="flex flex-col gap-3">
          <Image alt={w.title} src={w.imageUrl} width={200} height={200} className="w-70 h-100 object-cover object-top opacity-25"></Image>
          <div>
            <h1 className="font-bold opacity-25">{w.title}</h1>
            <h1 className="font-bold opacity-25">Pris: {w.price} kr</h1>
            <p className="opacity-25">{w.notes}</p>
            <h3 className="font-bold opacity-100">Köpt</h3>
          </div>
        </Link>
      ) : (
        <Link href={w.link} className="flex flex-col gap-3">
          <Image alt={w.title} src={w.imageUrl} width={200} height={200} className="w-70 h-100 object-cover object-top"></Image>
          <div>
            <h1 className="font-bold">{w.title}</h1>
            <h1 className="font-bold">Pris: {w.price} kr</h1>
            <p>{w.notes}</p>
            <h3>Prioritet: {w.priority}</h3>
          </div>
        </Link>
      )}
      <div className="flex gap-2">
        <TogglePurchased id={w._id} />
        <DeleteWish id={w._id} />
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import { FavoriteType } from "../models/Favorite";

type FavoriteCardProps = {
  f: FavoriteType;
};

const categoryColors: Record<string, string> = {
  Beauty: "bg-[var(--color-pink)]",
  Home: "bg-[var(--color-yellow)]",
  Fashion: "bg-[var(--color-lightgreen)]",
  Lifestyle: "bg-[var(--color-green)]",
  Tech: "bg-[var(--color-blue)]",
};

export const FavoriteCard = ({ f }: FavoriteCardProps) => {
  return (
    <div className="border-2 border-dashed border-[var(--color-beige-800)] rounded-sm p-3 flex flex-col flex-1 min-w-[250px] gap-3 justify-between text-start">
      <div className="flex items-center gap-2">
        <div className={`w-[25px] h-[25px] ${categoryColors[f.category]}`}></div>
        <h2 className="font-semibold text-2xl text-[var(--color-darkgreen)]">{f.category}</h2>
      </div>

      <Link href={f.link} className="flex flex-col gap-3 h-full">
        <Image alt={f.title} src={f.imageUrl} width={200} height={200} className="w-full aspect-[1/1] object-cover rounded-lg"></Image>
        <div className="flex flex-col justify-between h-full">
          <h1 className="font-semibold text-lg text-[var(--color-darkred)]">{f.title}</h1>
        </div>
      </Link>
    </div>
  );
};

import { PageNavigation } from "@/app/components/PageNavigation";
import { WishCard } from "@/app/components/WishCard";
import { connectDB } from "@/app/lib/db";
import { Wish } from "@/app/models/Wish";
import { WishList } from "@/app/models/WishList";
import { Plus } from "lucide-react";
import Link from "next/link";

type WishesByWishlistProps = {
  params: Promise<{
    id: string;
  }>;
};

export const WishesByWishlist = async ({ params }: WishesByWishlistProps) => {
  const { id } = await params;

  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i önskelistan i db
  const wishes = await Wish.find({ wishlistId: id });
  const wishlist = await WishList.findById(id);

  if (!wishlist)
    return (
      <div className="flex flex-col gap-8 md:p-6 p-2">
        <h1 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Oops, something went wrong, no wishlist found.</h1>
      </div>
    );

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-col gap-8 md:p-6 p-2">
      <PageNavigation items={[{ label: "Home", href: "/" }, { label: "Wishlists", href: "/wishlists" }, { label: wishlist.name }]} />
      <h1 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">{wishlist.name}</h1>
      {wishes.length === 0 && <h3 className="text-2xl text-start font-semibold text-[var(--color-darkgreen)]">Oops, this wishlist is empty.</h3>}
      <div className="flex flex-row flex-wrap gap-5 justify-start w-full">
        {wishes.map((w) => (
          <WishCard w={w} key={w._id} />
        ))}
      </div>
      <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-green)] p-2 transition delay-150 ease-in-out border-2 border-dashed border-[var(--color-green)] rounded hover:bg-[var(--color-yellow)]">
        <Plus />
        <span className="font-semibold text-xl">ADD WISH</span>
      </Link>
    </div>
  );
};

export default WishesByWishlist;

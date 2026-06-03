import { WishCard } from "@/app/components/WishCard";
import { connectDB } from "@/app/lib/db";
import { Wish } from "@/app/models/Wish";
import { WishList, WishListType } from "@/app/models/WishList";

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
      <div className="flex flex-wrap gap-5 p-6">
        <h3 className="text-[#BF5048] font-semibold text-2xl">Oops, something went wrong, no wishlist found.</h3>
      </div>
    );

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">{wishlist.name}</h3>
      <div className="flex flex-wrap gap-5">
        {wishes.map((w) => (
          <div key={w.uuid}>
            <WishCard w={w} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishesByWishlist;

import { WishCard } from "@/app/components/WishCard";
import { connectDB } from "@/app/lib/db";
import { Category } from "@/app/models/Category";
import { Wish } from "@/app/models/Wish";
import { Plus } from "lucide-react";
import Link from "next/link";

type WishesByCategoryProps = {
  params: Promise<{
    id: string;
  }>;
};

export const WishesByCategory = async ({ params }: WishesByCategoryProps) => {
  const { id } = await params;

  //Anslut till databas
  await connectDB();

  //Hitta alla wishes i önskelistan i db
  const wishes = await Wish.find({ categoryId: id });
  const category = await Category.findById(id);

  if (!category) {
    return (
      <div className="flex flex-wrap gap-5 p-6">
        <h3 className="text-[#BF5048] font-semibold text-2xl">Oops, something went wrong, no category found.</h3>
      </div>
    );
  }

  if (wishes.length === 0) {
    return (
      <div className="flex flex-col gap-8 md:p-16 p-4">
        <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Oops, this category is empty.</h3>
        <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-green)] p-2 transition delay-150 ease-in-out border-2 border-dashed border-[var(--color-green)] rounded hover:bg-[var(--color-yellow)]">
          <Plus />
          <span className="font-semibold text-xl">ADD WISH</span>
        </Link>
      </div>
    );
  }

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-col gap-8 md:p-16 p-4">
      <h1 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">{category.name}</h1>
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

export default WishesByCategory;

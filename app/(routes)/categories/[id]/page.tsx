import { WishCard } from "@/app/components/WishCard";
import { connectDB } from "@/app/lib/db";
import { Category } from "@/app/models/Category";
import { Wish } from "@/app/models/Wish";

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
      <div className="flex flex-wrap gap-5 p-6">
        <h3 className="text-[#BF5048] font-semibold text-2xl">Oops, this category is empty.</h3>
      </div>
    );
  }

  //Loopa genom listan och visa dem
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">{category.name}</h3>
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

export default WishesByCategory;

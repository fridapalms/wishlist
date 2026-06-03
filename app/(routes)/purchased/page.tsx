import { PurchasedWishes } from "@/app/components/PurchasedWishes";

export default function CategoryPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">Purchased</h3>
      <PurchasedWishes />
    </div>
  );
}

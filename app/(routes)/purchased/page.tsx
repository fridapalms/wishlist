import { PurchasedWishes } from "@/app/components/PurchasedWishes";

export default function CategoryPage() {
  return (
    <div className="flex flex-col gap-8 md:p-16 p-8">
      <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Purchased</h3>
      <PurchasedWishes />
    </div>
  );
}

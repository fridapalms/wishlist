import { AddWish } from "@/app/components/AddWish";

export default function AddPage() {
  return (
    <div className="flex flex-col gap-8 md:p-16 p-8">
      <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Add wish</h3>
      <AddWish />
    </div>
  );
}

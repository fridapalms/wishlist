import { AddWish } from "@/app/components/AddWish";

export default function AddPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">Add wish</h3>
      <AddWish />
    </div>
  );
}

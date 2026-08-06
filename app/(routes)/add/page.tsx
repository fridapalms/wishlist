import { AddWish } from "@/app/components/AddWish";
import { PageNavigation } from "@/app/components/PageNavigation";

export default function AddPage() {
  return (
    <div className="flex flex-col gap-8 md:p-6 p-2">
      <PageNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Add wish", href: "/add" },
        ]}
      />
      <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Add wish</h3>
      <AddWish />
    </div>
  );
}

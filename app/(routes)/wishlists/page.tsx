import { AddWishList } from "@/app/components/AddWishList";
import { AllLists } from "@/app/components/AllLists";

export default function ListsPage() {
  return (
    <div className="flex flex-col gap-8 md:p-16 p-8">
      <h1 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Your wishlists</h1>
      <AllLists />
      <AddWishList />
    </div>
  );
}

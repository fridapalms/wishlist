import { AddWishList } from "@/app/components/AddWishList";
import { AllLists } from "@/app/components/AllLists";
import { PageNavigation } from "@/app/components/PageNavigation";

export default function ListsPage() {
  return (
    <div className="flex flex-col gap-8 md:p-6 p-2">
      <PageNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Wishlists", href: "/wishlists" },
        ]}
      />

      <h1 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Your wishlists</h1>
      <AllLists />
      <AddWishList />
    </div>
  );
}

import { AddWishByMetadata } from "@/app/components/AddWishByMetadata";
import { PageNavigation } from "@/app/components/PageNavigation";
import { getCategories } from "@/app/services/getCategories";
import { getWishlists } from "@/app/services/getWishlists";

export default async function AddPage() {
  const wishlists = await getWishlists();
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-8 md:p-6 p-2">
      <PageNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Add wish", href: "/add" },
        ]}
      />
      <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Add wish</h3>
      <AddWishByMetadata wishlists={wishlists} categories={categories} />
    </div>
  );
}

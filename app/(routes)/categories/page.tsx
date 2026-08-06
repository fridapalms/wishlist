import { AllCategories } from "@/app/components/AllCategories";
import { PageNavigation } from "@/app/components/PageNavigation";

export default function CategoryPage() {
  return (
    <div className="flex flex-col gap-8 md:p-6 p-2">
      <PageNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
        ]}
      />

      <h3 className="text-3xl text-start font-semibold text-[var(--color-darkgreen)]">Categories</h3>
      <AllCategories />
    </div>
  );
}

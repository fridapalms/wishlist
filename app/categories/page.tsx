import { AllCategories } from "../components/AllCategories";

export default function CategoryPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">Categories</h3>
      <AllCategories />
    </div>
  );
}

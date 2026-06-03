import { AllLists } from "../components/AllLists";

export default function ListsPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">My wishlists</h3>
      <AllLists />
    </div>
  );
}

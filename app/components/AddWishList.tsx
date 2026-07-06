import { Plus } from "lucide-react";
import { createWishList } from "../actions/wishListActions";

export const AddWishList = async () => {
  return (
    <form action={createWishList} className="flex gap-3">
      <input type="text" name="wishListName" placeholder="Create new wishlist.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" required />
      <button className="flex flex-row gap-2 items-center justify-center text-[var(--color-lightyellow)] p-2 transition delay-150 ease-in-out rounded-full hover:bg-[var(--color-darkgreen)] bg-[var(--color-green)] text-large font-semibold">
        <Plus />
      </button>
    </form>
  );
};

import { createWishList } from "../actions/wishListActions";

export const AddWishList = async () => {
  return (
    <form action={createWishList} className="flex gap-3">
      <input type="text" name="wishListName" placeholder="Name wishlist.." className="border-[#BF5048] border p-1.5" required />
      <button className="flex flex-row gap-2 items-center justify-center text-[#FAF7F0] border p-2 transition delay-150 ease-in-out bg-[#BF5048] hover:bg-[#DFC6C0] font-semibold">Create wishlist</button>
    </form>
  );
};

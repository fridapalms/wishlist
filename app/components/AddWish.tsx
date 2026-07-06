import { Plus } from "lucide-react";
import { createWish } from "../actions/wishActions";
import { getCategories } from "../services/getCategories";
import { getWishlists } from "../services/getWishlists";

export const AddWish = async () => {
  const wishlists = await getWishlists();
  const categories = await getCategories();

  //Formulär för att lägga till wish
  return (
    <form action={createWish} className="flex flex-col gap-4 border-2 border-dashed border-[var(--color-green)] rounded p-8">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="wishlistId" className="font-semibold">
          Wishlist:
        </label>
        <select name="wishlistId" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]">
          {wishlists.map((list) => (
            <option key={list._id} value={list._id.toString()}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="categoryId" className="font-semibold">
          Category:
        </label>
        <select name="categoryId" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]">
          {categories.map((category) => (
            <option key={category._id} value={category._id.toString()}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>
        <input type="text" name="title" placeholder="Product name.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" required />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="price" className="font-semibold">
          Price:
        </label>
        <input type="number" name="price" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" placeholder="0" required />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="link" className="font-semibold">
          Product link:
        </label>
        <input type="text" name="link" placeholder="Product link.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="imageUrl" className="font-semibold">
          Image link:
        </label>
        <input type="text" name="imageUrl" placeholder="Image link.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="priority" className="font-semibold">
          Priority:
        </label>
        <select name="priority" defaultValue="medium" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="notes" className="font-semibold">
          Notes:
        </label>
        <input type="text" name="notes" placeholder="Notes.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" />
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <button type="submit" className="flex flex-row gap-2 items-center justify-center text-[var(--color-lightyellow)] p-2 px-4 transition delay-100 ease-in-out rounded-full hover:bg-[var(--color-darkgreen)] bg-[var(--color-green)] text-large font-semibold">
          <Plus /> ADD WISH
        </button>
      </div>
    </form>
  );
};

/*
      <input type="text" name="wishListName" placeholder="Create new wishlist.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" required />
      <button className="flex flex-row gap-2 items-center justify-center text-[var(--color-lightyellow)] p-2 transition delay-150 ease-in-out rounded-full hover:bg-[var(--color-darkgreen)] bg-[var(--color-green)] text-large font-semibold">
        <Plus />
      </button>
      */

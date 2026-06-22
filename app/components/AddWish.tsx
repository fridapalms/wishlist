import { createWish } from "../actions/wishActions";
import { getCategories } from "../services/getCategories";
import { getWishlists } from "../services/getWishlists";

export const AddWish = async () => {
  const wishlists = await getWishlists();
  const categories = await getCategories();

  //Formulär för att lägga till wish
  return (
    <form action={createWish} className="flex flex-col gap-3">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="wishlistId" className="font-semibold">
          Wishlist:
        </label>
        <select name="wishlistId" className="border-[#BF5048] border p-1.5">
          {wishlists.map((list) => (
            <option key={list._id} value={list._id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="categoryId" className="font-semibold">
          Category:
        </label>
        <select name="categoryId" className="border-[#BF5048] border p-1.5">
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>
        <input type="text" name="title" placeholder="Product name.." className="border-[#BF5048] border p-1.5" required />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="price" className="font-semibold">
          Price:
        </label>
        <input type="number" name="price" className="border-[#BF5048] border p-1.5" placeholder="0" required />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="link" className="font-semibold">
          Product link:
        </label>
        <input type="text" name="link" placeholder="Product link.." className="border-[#BF5048] border p-1.5" />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="imageUrl" className="font-semibold">
          Image link:
        </label>
        <input type="text" name="imageUrl" placeholder="Image link.." className="border-[#BF5048] border p-1.5" />
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="priority" className="font-semibold">
          Priority:
        </label>
        <select name="priority" defaultValue="medium" className="border-[#BF5048] border p-1.5">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="notes" className="font-semibold">
          Notes:
        </label>
        <input type="text" name="notes" placeholder="Notes.." className="border-[#BF5048] border p-1.5" />
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <button type="submit" className="flex flex-row gap-2 items-center justify-center text-[#FAF7F0] border p-2 transition delay-150 ease-in-out bg-[#BF5048] hover:bg-[#DFC6C0] font-semibold">
          Add wish
        </button>
      </div>
    </form>
  );
};

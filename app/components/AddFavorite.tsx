import { createFavorite } from "../actions/favoriteActions";

export const AddFavorite = async () => {
  //Formulär för att lägga till favorite
  return (
    <form action={createFavorite} className="flex flex-col gap-3">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="categoryId" className="font-semibold">
          Category:
        </label>
        <input type="text" name="category" placeholder="Category name.." className="border-[#BF5048] border p-1.5" required />
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
        <button type="submit" className="flex flex-row gap-2 items-center justify-center text-[#FAF7F0] border p-2 transition delay-150 ease-in-out bg-[#BF5048] hover:bg-[#DFC6C0] font-semibold">
          Add favorite
        </button>
      </div>
    </form>
  );
};

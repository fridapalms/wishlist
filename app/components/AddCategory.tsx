import { createCategory } from "../actions/categoryActions";

export const AddCategory = async () => {
  return (
    <form action={createCategory} className="flex gap-3">
      <input type="text" name="categoryName" placeholder="Category name.." className="border-[#BF5048] border p-1.5" required />
      <button className="flex flex-row gap-2 items-center justify-center text-[#FAF7F0] border p-2 transition delay-150 ease-in-out bg-[#BF5048] hover:bg-[#DFC6C0] font-semibold">Create new category</button>
    </form>
  );
};

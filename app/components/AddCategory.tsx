import { createCategory } from "../actions/categoryActions";

export const AddCategory = async () => {
  return (
    <form action={createCategory}>
      <input type="text" name="categoryName" placeholder="Namn på kategori" required />
      <button>Skapa kategori</button>
    </form>
  );
};

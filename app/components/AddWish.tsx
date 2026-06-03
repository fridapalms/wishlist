"use server";

import { createWish } from "../actions/wishActions";
import { getCategories } from "../services/getCategories";
import { getWishlists } from "../services/getWishlists";

export const AddWish = async () => {
  const wishlists = await getWishlists();
  const categories = await getCategories();

  //Formulär för att lägga till wish
  return (
    <form action={createWish}>
      <select name="wishlistId">
        {wishlists.map((list) => (
          <option key={list._id} value={list._id}>
            {list.name}
          </option>
        ))}
      </select>
      <select name="categoryId">
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input type="text" name="title" placeholder="Produktnamn" required />
      <input type="number" name="price" required />
      <input type="text" name="link" placeholder="Produktlänk" />
      <input type="text" name="imageUrl" placeholder="Bildlänk" />
      <select name="priority" defaultValue="medium">
        <option value="low">Låg</option>
        <option value="medium">Medel</option>
        <option value="high">Hög</option>
      </select>
      <textarea name="notes" placeholder="Anteckningar" />
      <button type="submit">Lägg till</button>
    </form>
  );
};

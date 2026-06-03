import { createWishList } from "../actions/wishListActions";

export const AddWishList = async () => {
  return (
    <form action={createWishList}>
      <input type="text" name="wishListName" placeholder="Namn på lista" required />
      <button>Skapa lista</button>
    </form>
  );
};

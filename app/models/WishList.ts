import { model, models, Schema } from "mongoose";

//Schema hur wish ska se ut i databasen
const wishListSchema = new Schema({
  name: { type: String, required: true },
});

//Skapar en model
export const WishList = models.wishlist || model("wishlist", wishListSchema);

//Skapar en type
export type WishListType = {
  _id: string;
  name: string;
};

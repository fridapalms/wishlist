import { model, models, Schema } from "mongoose";

//Schema hur wish ska se ut i databasen
const favoriteSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, default: "" },
  imageUrl: { type: String, default: "/placeholder.png" },
  category: { type: String, required: true },
});

//Skapar en model
export const Favorite = models.favorite || model("favorite", favoriteSchema);

//Skapar en type
export type FavoriteType = {
  _id: string;
  title: string;
  price: number;
  link: string;
  imageUrl: string;
  category: string;
};

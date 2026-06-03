import { model, models, Schema } from "mongoose";

//Schema hur wish ska se ut i databasen
const wishSchema = new Schema({
  uuid: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, default: "" },
  imageUrl: { type: String, default: "/placeholder.png" },
  purchased: { type: Boolean, default: false },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  notes: { type: String, default: "" },
  wishlistId: { type: String, required: true },
  categoryId: { type: String, required: true },
});

//Skapar en model
export const Wish = models.wish || model("wish", wishSchema);

//Skapar en type
export type WishType = {
  uuid: string;
  title: string;
  price: number;
  link: string;
  imageUrl: string;
  purchased: boolean;
  priority: "low" | "medium" | "high";
  notes: string;
  wishlistId: string;
  categoryId: string;
};

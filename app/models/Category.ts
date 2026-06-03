import { model, models, Schema } from "mongoose";

//Schema hur wish ska se ut i databasen
const categorySchema = new Schema({
  name: { type: String, required: true },
});

//Skapar en model
export const Category = models.category || model("category", categorySchema);

//Skapar en type
export type CategoryType = {
  _id: string;
  name: string;
};

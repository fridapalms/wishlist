import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export const User = models.user || model("user", userSchema);

export type UserType = {
  _id: string;
  email: string;
  name: string;
};

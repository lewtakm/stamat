import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema<UserDocument>(
  {
    accountType: { default: 1, type: Number },
    email: {
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Adres e-mail nie prawidłowy.",
      ],
      required: [true, "E-mail jest wymagany."],
      type: String,
      unique: true,
    },
    name: { required: [true, "Imię i nazwisko jest wymagane."], type: String },
    password: { required: true, type: String },
    verified: { default: 0, type: Number },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models?.User || model<UserDocument>("User", UserSchema);

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  accountType: number;
  verified: number;
  createdAt: Date;
  updatedAt: Date;
}

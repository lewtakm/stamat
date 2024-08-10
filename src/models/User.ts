import mongoose, { model, Schema } from "mongoose";

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "E-mail jest wymagany."],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Adres e-mail nie prawidłowy.",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   required: [true, "Login jest wymagany."],
    // },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models?.User || model<UserDocument>("User", UserSchema);

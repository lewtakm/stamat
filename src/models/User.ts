import mongoose, { model, Schema } from "mongoose";

export enum UserAccountTypeEnum {
  Admin = 1,
  User = 2,
}

const UserSchema = new Schema<UserDocument>(
  {
    accountType: { default: UserAccountTypeEnum.User, type: Number },
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
  accountType?: UserAccountTypeEnum;
  createdAt: Date;
  email: string;
  image?: string;
  name: string;
  password: string;
  phone?: string;
  updatedAt: Date;
  verified?: number;
}

"use server";

import { connectDB } from "@/lib/mongodb";
import { User } from "@/models";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, name, password } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound) {
      return {
        error: {
          email: "Adres e-mail jest już zarejestrowany!",
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      name,
      password: hashedPassword,
    });

    await user.save();
  } catch (e) {
    console.log(e);
  }
};

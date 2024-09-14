"use server";

import { logger } from "@/helpers";
import { connectDB } from "@/lib";
import { User } from "@/models";
import bcrypt from "bcryptjs";

export const addExercise = async (values: any) => {
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
    logger(e);
  }
};

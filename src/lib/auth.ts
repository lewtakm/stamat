import type { NextAuthOptions } from "next-auth";

import { connectDB } from "@/lib";
import { User } from "@/models";
import bcrypt from "bcryptjs";
import credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      id: "credentials",
      name: "Credentials",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

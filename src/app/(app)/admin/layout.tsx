import type { Metadata } from "next";

import { connectDB } from "@/lib";
import { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Ćwicz matematykę",
  title: "StaMat - Ucz się matematyki!",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  await connectDB();
  return children;
};

export default RootLayout;

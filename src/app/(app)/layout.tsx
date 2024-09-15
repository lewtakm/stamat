import type { Metadata } from "next";

import { DefaultLayout } from "@/layouts";
import { getServerSession } from "next-auth";
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
  const userData = await getServerSession();
  return <DefaultLayout userData={userData}>{children}</DefaultLayout>;
};

export default RootLayout;

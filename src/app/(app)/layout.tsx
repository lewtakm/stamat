import type { Metadata } from "next";
import { ReactNode } from "react";
import { DefaultLayout } from "@/layouts";
import { getServerSession } from "next-auth";
import "../../css/globals.css";

export const metadata: Metadata = {
  description: "Ćwicz matematykę",
  title: "StaMat",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const userData = await getServerSession();
  return (
    <html lang="pl">
      <body>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <DefaultLayout userData={userData}>{children}</DefaultLayout>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

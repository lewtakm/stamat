import type { Metadata } from "next";
import { ReactNode } from "react";
import "../css/globals.css";

export const metadata: Metadata = {
  description: "Ćwicz matematykę",
  title: "StaMat",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="pl">
      <body>
        <div className="dark:bg-boxdark-2 dark:text-bodydark h-screen">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

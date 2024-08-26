import type { Metadata } from "next";
import { Providers } from "../../providers";
import { ReactNode } from "react";
import "../../css/globals.css";

export const metadata: Metadata = {
  title: "StaMat",
  description: "Ćwicz matematykę",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="pl">
    <body>
      <Providers>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;

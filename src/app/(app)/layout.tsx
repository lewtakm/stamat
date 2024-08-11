import type { Metadata } from "next";
import { Providers } from "../../providers";
import { ReactNode } from "react";
import { NavBar } from "@/components";
import "../globals.css";

export const metadata: Metadata = {
  title: "StaMat",
  description: "Ćwicz matematykę",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body>
      <Providers>
        <NavBar />
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;

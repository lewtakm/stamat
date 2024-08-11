import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeToggle } from "@/components";

export const metadata: Metadata = {
  title: "StaMat",
  description: "Cwićz matematyke",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body>
      <Providers>
        <ThemeToggle />
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;

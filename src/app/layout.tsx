import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { ReactNode } from "react";

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
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;

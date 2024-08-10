"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children?: ReactNode;
};

export const Providers = ({ children }: Props) => (
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  </NextUIProvider>
);

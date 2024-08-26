"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children?: ReactNode;
};

export const Providers = ({ children }: Props) => (
  <SessionProvider>{children}</SessionProvider>
);

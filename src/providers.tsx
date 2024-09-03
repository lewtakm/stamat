"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Providers = ({ children }: Props) => (
  <SessionProvider>{children}</SessionProvider>
);

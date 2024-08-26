import NextLink from "next/link";
import { ComponentProps } from "react";

export const Link = (props: ComponentProps<typeof NextLink>) => (
  <NextLink
    className="text-sm text-blue-400 font-bold  transition duration-150 ease hover:text-blue-600"
    {...props}
  />
);

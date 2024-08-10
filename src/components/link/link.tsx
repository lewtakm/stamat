import NextLink from "next/link";
import { ComponentProps } from "react";

export const Link = (props: ComponentProps<typeof NextLink>) => (
  <NextLink
    className="text-sm text-blue-700 dark:text-white transition duration-150 ease hover:text-blue-900"
    {...props}
  />
);

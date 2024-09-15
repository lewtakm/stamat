import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
      {item.map((item: any, index: number) => (
        <li key={index}>
          <Link
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
              pathname === item.route ? "text-white" : ""
            }`}
            href={item.route}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

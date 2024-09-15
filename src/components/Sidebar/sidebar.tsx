"use client";

import { ClickOutside } from "@/components";
import { useLocalStorage } from "@/hooks";
import { Routes } from "@/routes";
import {
  ArrowTrendingUpIcon,
  BookOpenIcon,
  CalculatorIcon,
  CurrencyEuroIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import { SidebarItem } from "./components";

interface SidebarProps {
  setSidebarOpen: (arg: boolean) => void;
  sidebarOpen: boolean;
}

const menuGroups = [
  {
    menuItems: [
      {
        children: [{ label: "Matematyka", route: "/" }],
        icon: <PencilSquareIcon className="size-5" />,
        label: "Wykłady",
        route: "#",
      },
      {
        icon: <ArrowTrendingUpIcon className="size-5" />,
        label: "Premium",
        route: "#",
      },
    ],
    name: "Dla Ucznia",
  },
  {
    menuItems: [
      {
        icon: <BookOpenIcon className="size-5" />,
        label: "Nauczanie",
        route: "#",
      },
      {
        children: [
          { label: "Przykład", route: "#" },
          { label: "Przykład 2", route: "#" },
        ],
        icon: <CurrencyEuroIcon className="size-5" />,
        label: "Kariera",
        route: "#",
      },
    ],
    name: "Dla Nauczyciela",
  },
  {
    menuItems: [
      {
        children: [
          { label: "Dodaj zadanie", route: Routes.AddExcercises },
          { label: "Lista zadań", route: Routes.ExcercisesList },
        ],
        icon: <CalculatorIcon className="size-5" />,
        label: "Zadania",
        route: "#",
      },
    ],
    name: "Panel Administracyjny",
  },
];

export const Sidebar = ({ setSidebarOpen, sidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <Image
              alt="StaMat - Ucz się matematyki!"
              height={32}
              priority
              src={"/assets/images/logo-no-background.svg"}
              style={{ height: "auto", width: "auto" }}
              width={176}
            />
          </Link>

          <button
            aria-controls="sidebar"
            className="block lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="fill-current"
              fill="none"
              height="18"
              viewBox="0 0 20 18"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      item={menuItem}
                      key={menuIndex}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

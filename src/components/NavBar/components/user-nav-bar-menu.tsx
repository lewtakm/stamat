"use client";

import { ROUTES } from "@/routes";
import { signOut, useSession } from "next-auth/react";
import {
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const UserNavBarMenu = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return;
  }

  if (status === "authenticated") {
    return (
      <>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Zalogowano jako</p>
              <p className="font-semibold">{data?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">Ustawienia</DropdownItem>
            <DropdownItem key="team_settings">Moje zadania</DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => {
                signOut({ redirect: false }).then(() => {
                  router.push("/");
                });
              }}
            >
              Wyloguj
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    );
  }

  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Link href={ROUTES.login}>Zaloguj</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="success" href={ROUTES.register} variant="flat">
          Zarejestruj
        </Button>
      </NavbarItem>
    </>
  );
};

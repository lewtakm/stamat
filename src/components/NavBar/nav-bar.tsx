import { ROUTES } from "@/routes";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { UserNavBarMenu } from "./components";

export const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="./">
          <p className="font-bold text-inherit">Logo - StaMat</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Dla ucznia
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Dla nauczyciela
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <UserNavBarMenu />
      </NavbarContent>
    </Navbar>
  );
};

"use client";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Profile", "Dashboard", "Activity"];
  return (
    <Navbar
      className="bg-texto/50 md:h-24 "
      classNames={{
        content: "text-white",
        wrapper: "max-w-[91.6%] lg:max-w-[85%] max-lg:px-0",
      }}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarBrand as={Link} href={"/"}>
        <Image
          src={"/logo-cucharepuestos.jpg"}
          alt="Logo cucha repuestos"
          width={80}
          height={80}
          className="rounded-full max-md:h-14 max-md:w-14"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem>
          <Link className="text-white text-sm font-semibold" href="/repuestos">
            Repuestos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-sm font-semibold" href="/sobre-nosotros">
            Sobre Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            endContent={<FaAngleRight />}
            as={Link}
            className="bg-primario text-white rounded-md font-semibold py-4 px-6 items-center"
            href="/#contacto"
            variant="flat"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="bg-texto/50 px-10 text-right items-end py-6 gap-4 backdrop-blur-md">
        <NavbarMenuItem>
          <Link className="text-white text-sm font-semibold" href="/repuestos">
            Repuestos
          </Link>
        </NavbarMenuItem>
        <NavbarItem>
          <Link className="text-white text-sm font-semibold" href="/sobre-nosotros">
            Sobre Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            endContent={<FaAngleRight />}
            as={Link}
            className="bg-primario text-white rounded-md font-semibold py-4 px-6 items-center"
            href="/#contacto"
            variant="flat"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;

"use client";
import { Link } from "@nextui-org/react";

const NavList = () => {
  return (
    <nav className="flex flex-col items-start gap-4">
      <h6 className="text-texto xl:text-lg font-semibold">Navegación</h6>
      <ul className="flex flex-col items-start gap-2">
        <li>
          <Link size="sm" className="text-texto font-medium max-xl:text-xs" href="/repuestos">
            Repuestos
          </Link>
        </li>
        <li>
          <Link
            size="sm"
            className="text-texto font-medium max-xl:text-xs"
            href="/sobre-nosotros"
          >
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link size="sm" className="text-texto font-medium max-xl:text-xs" href="/#contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;

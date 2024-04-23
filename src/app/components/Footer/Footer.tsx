import Image from "next/image";
import NavList from "./NavList";
import LegalInfo from "./LegalInfo";
import SucursalInfo from "./SucursalInfo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-fondo pt-10 ">
      <div className="w-full flex items-start justify-start gap-10 lg:gap-16 xl:gap-24 2xl:gap-32 mb-10 px-[4%] lg:px-[9.5%] max-lg:flex-wrap">
        <Image
          src={"/logo-cucharepuestos2.jpg"}
          alt="Logo de cucha repuestos en footer"
          width={125}
          height={125}
          className="rounded-full md:w-20 md:h-20 xl:w-auto xl:h-auto"
        />
        <NavList />
        <LegalInfo />
        <SucursalInfo />
      </div>
      <div className="w-full bg-texto py-4 px-[4%] lg:px-[9.5%] text-white flex justify-between items-center">
        <p className="text-xs lg:text-sm">© 2024 Cucha Repuestos</p>
        <div className="text-xs lg:text-sm flex items-center gap-1">
          Desarrollado por{" "}
          <Link target="_blank" href="https://dutsiland.com">
            <Image
              src={"/logo-dutsiland.png"}
              width={80}
              height={80}
              alt="Logo de estudio de desarrollo Dutsiland"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

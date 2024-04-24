"use client";
import { BsTelephone } from "react-icons/bs";
import { Button, Link } from "@nextui-org/react";
import { IoMailOutline } from "react-icons/io5";
import { Sucursal, sucursalInfo } from "../SucursalSection/SucursalInfo";
import { useState } from "react";
const ContactInfo = () => {
  const [sucursalShown, setSucursalShown] = useState<Sucursal>(
    Sucursal.comodoro
  );
  const sucursalShowInfo = sucursalInfo[sucursalShown];
  return (
    <>
      <h5 className="md:text-lg 2xl:text-xl font-semibold">
        Contacto (
        {sucursalShown === Sucursal.comodoro ? "Comodoro Rivadavia" : "Esquel"})
      </h5>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <BsTelephone className="text-primario h-6 w-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10" />
          <Link
            href={"https://wa.me/" + sucursalShowInfo.tel}
            target="_blank"
            className="font-semibold text-sm 2xl:text-base text-primario"
          >
            {sucursalShowInfo.tel}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <IoMailOutline className="text-primario h-6 w-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10" />
          <Link
            href={"mailto:" + sucursalShowInfo.email}
            target="_blank"
            className="font-semibold text-sm 2xl:text-base text-primario"
          >
            {sucursalShowInfo.email}
          </Link>
        </div>
      </div>
      <Button
        onClick={() =>
          setSucursalShown((value) =>
            value === Sucursal.comodoro ? Sucursal.esquel : Sucursal.comodoro
          )
        }
        className="rounded-[36px] text-primario font-semibold border-primario -ml-2 md:-ml-1"
        variant="light"
        size="sm"
      >
        Ver sucursal{" "}
        {sucursalShown === Sucursal.comodoro ? "Esquel" : "Comodoro"}
      </Button>
    </>
  );
};

export default ContactInfo;

"use client";
import { Button, Link } from "@nextui-org/react";
import { Sucursal, sucursalInfo } from "../SucursalSection/SucursalInfo";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";

const SucursalInfo = () => {
  const [sucursalShown, setSucursalShown] = useState<Sucursal>(
    Sucursal.comodoro
  );
  const sucursalShowInfo = sucursalInfo[sucursalShown];
  return (
    <div className="flex flex-col items-start gap-4">
      <h6 className="text-texto xl:text-lg font-semibold whitespace-pre-line">
        Cucha Repuestos <span className="hidden md:flex lg:hidden">{'\n'}</span> (
        {sucursalShown === Sucursal.comodoro ? "Comodoro Rivadavia" : "Esquel"})
      </h6>
      <div className="flex items-start flex-col gap-4">
        <div className="flex items-center gap-2">
          <BsTelephone className="text-primario h-5 w-5" />
          <Link
            href={"https://wa.me/" + sucursalShowInfo.tel}
            target="_blank"
            className="font-medium text-xs 2xl:text-sm text-texto"
          >
            {sucursalShowInfo.tel}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <IoMailOutline className="text-primario h-5 w-5" />
          <Link
            href={"mailto:" + sucursalShowInfo.email}
            target="_blank"
            className="font-medium text-xs 2xl:text-sm text-texto"
          >
            {sucursalShowInfo.email}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <IoLogoInstagram className="text-primario h-5 w-5" />
          <Link
            href={sucursalShowInfo.ig.url}
            target="_blank"
            className="font-medium text-xs 2xl:text-sm text-texto"
          >
            {sucursalShowInfo.ig.user}
          </Link>
        </div>
        {sucursalShowInfo.fb && (
          <div className="flex items-center gap-2">
            <FaFacebook className="text-primario h-5 w-5" />
            <Link
              href={sucursalShowInfo.fb.url}
              target="_blank"
              className="font-medium text-xs 2xl:text-sm text-texto"
            >
              {sucursalShowInfo.fb.user}
            </Link>
          </div>
        )}
      </div>
      <Button
        onClick={() =>
          setSucursalShown((value) =>
            value === Sucursal.comodoro ? Sucursal.esquel : Sucursal.comodoro
          )
        }
        className="rounded-[36px] text-primario font-semibold border-primario -ml-2.5"
        variant="light"
        size="sm"
      >
        Ver sucursal{" "}
        {sucursalShown === Sucursal.comodoro ? "Esquel" : "Comodoro"}
      </Button>
    </div>
  );
};

export default SucursalInfo;

"use client";
import { useState } from "react";
import Map from "./Map";
import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { Button, Link } from "@nextui-org/react";
import { IoMailOutline } from "react-icons/io5";
import { Sucursal, sucursalInfo } from "./SucursalInfo";
import { FaWhatsapp } from "react-icons/fa6";

const SucursalSection = () => {
  const [sucursalShown, setSucursalShown] = useState<Sucursal>(
    Sucursal.comodoro
  );
  const sucursalShowInfo = sucursalInfo[sucursalShown];
  return (
    <section className="w-11/12 lg:w-4/5 mt-12 xl:mt-14 flex max-md:flex-wrap gap-3 xl:gap-6">
      <div
        className={`bg-white flex flex-col w-full md:w-1/2 lg:w-2/5
            items-start justify-between gap-4 xl:gap-6 px-4 md:px-6 py-7 md:py-9 text-texto drop-shadow-md`}
      >
        <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold mb-2">
          Visite nuestra sucursal
        </h3>
        <div className="flex items-center gap-4">
          <SlLocationPin className="text-primario h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <h5 className="font-semibold max-xl:text-sm xl:text-base 2xl:text-lg whitespace-pre-line">
            {sucursalShowInfo.location.addressName.replaceAll("+", " ")}
          </h5>
        </div>
        <div className="flex items-center gap-4">
          <GoClock className="text-primario h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <h5 className="font-semibold max-xl:text-sm xl:text-base 2xl:text-lg whitespace-pre-line">
            {sucursalShowInfo.hor}
          </h5>
        </div>
        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-primario h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <Link
            href={"https://wa.me/" + sucursalShowInfo.tel}
            target="_blank"
            className="font-semibold max-xl:text-sm xl:text-base 2xl:text-lg text-primario"
          >
            {sucursalShowInfo.tel}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <IoMailOutline className="text-primario h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <Link
            href={"mailto:" + sucursalShowInfo.email}
            target="_blank"
            className="font-semibold max-xl:text-sm xl:text-base 2xl:text-lg text-primario"
          >
            {sucursalShowInfo.email}
          </Link>
        </div>
        <Button
          onClick={() =>
            setSucursalShown((value) =>
              value === Sucursal.comodoro ? Sucursal.esquel : Sucursal.comodoro
            )
          }
          className="rounded-[36px] text-primario font-semibold border-primario mt-2 md:max-xl:text-xs"
          variant="bordered"
        >
          Ver sucursal{" "}
          {sucursalShown === Sucursal.comodoro ? "Esquel" : "Comodoro"}
        </Button>
      </div>
      <div className="flex-1 [&>div]:!h-full drop-shadow-md max-md:h-64">
        <Map location={sucursalShowInfo.location} />
      </div>
    </section>
  );
};

export default SucursalSection;

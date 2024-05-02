"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";
import { sucursalInfo } from "./SucursalSection/SucursalInfo";

const WhatsappButton = () => {
  return (
    <Dropdown
      classNames={{ trigger: "fixed bottom-3 right-3 z-10" }}
      placement="top-end"
    >
      <DropdownTrigger>
        <Button
          className="rounded-full w-12 h-12 p-2 min-w-4 bg-[#00D970] data-[hover=true]:bg-[#00D970]/80"
          variant="light"
        >
          <FaWhatsapp className=" w-full h-full text-white" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        
        <DropdownItem as={Link} target="_blank" href={"https://wa.me/" + sucursalInfo[0].tel} key="profile" className="gap-2 text-texto">
          Comodoro Rivadavia
        </DropdownItem>
        <DropdownItem as={Link} target="_blank" href={"https://wa.me/" + sucursalInfo[1].tel} key="profile" className="gap-2 text-texto">
          Esquel
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default WhatsappButton;

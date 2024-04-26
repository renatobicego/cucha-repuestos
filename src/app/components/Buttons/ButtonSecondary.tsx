"use client";

import { Button, Link } from "@nextui-org/react";

const ButtonSecondary = ({ href, text }: { href: string; text: string }) => {
  return (
    <Button
      as={Link}
      href={href}
      className="bg-white text-primario py-4 px-8 rounded-[36px] font-bold max-md:taxt-sm hover:scale-105 data-[hover=true]:opacity-100"
    >
      {text}
    </Button>
  );
};

export default ButtonSecondary;

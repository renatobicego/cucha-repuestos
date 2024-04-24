"use client";
import Image from "next/image";
import {
  CategoryRepuesto,
  categories,
} from "../components/Repuestos/Repuestos";
import { Accordion, AccordionItem } from "@nextui-org/react";

const RepuestosCardGrid = () => {
  return (
    <Accordion
      variant="splitted"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start"
      itemClasses={{
        base: "flex flex-col items-start rounded-[20px] bg-white  px-4 drop-shadow-md",
        heading: "w-full",
        title: "text-texto font-medium max-md:text-base md:ml-2",
      }}
    >
      {Object.keys(categories).map((key) => {
        const category: CategoryRepuesto = categories[key];
        return (
          <AccordionItem
            startContent={
              <Image
                alt={category.text}
                src={`/icons/${category.image}`}
                width={65}
                height={65}
                className="size-8 md:size-10 lg:size-12 xl:size-14 "
              />
            }
            title={category.text}
            key={key}
          >
            <ul className="list-disc list-inside md:px-2 pb-4">
              {category.repuestos.map((repuesto, i) => (
                <li
                  className="text-xs lg:text-sm md:-indent-5 md:pl-5 pl-[1.1rem] -indent-[1.1rem] mb-1"
                  key={i}
                >
                  {repuesto}
                </li>
              ))}
            </ul>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default RepuestosCardGrid;

import Image from "next/image";
import { CategoryRepuesto, categories } from "./Repuestos";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const RepuestosSection = () => {
  return (
    <section className="w-full mt-10 relative flex flex-col items-center">
      <Image
        alt="Camion rojo de fondo a sección de repuestos"
        src={"/images/repuestos-camion-verde.jpg"}
        width={1440}
        height={777}
        className="object-cover h-full absolute left-0 top-0 w-full"
      />
      <div className="relative z-10 flex flex-col items-center w-11/12 lg:w-4/5 my-12 md:my-16 xl:my-20 gap-10">
        <h2 className="text-white font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center">
          Línea completa de repuestos IVECO
        </h2>
        <div className="w-full flex flex-wrap gap-3 md:gap-5 lg:gap-6 justify-center">
          {Object.keys(categories).map((key) => {
            const category: CategoryRepuesto = categories[key];
            return (
              <div key={key} className="flex gap-2 md:gap-4 items-center rounded-[20px] bg-white text-texto pl-2 pr-6 md:pl-4 md:pr-8 py-1 md:py-2 max-md:max-w-[48%]">
                {/* Category image */}
                <Image
                  alt={category.text}
                  src={`/icons/${category.image}`}
                  width={65}
                  height={65}
                  className="w-8 md:w-10 h-8 md:h-10 xl:w-16 xl:h-16"
                />
                {/* Category text */}
                <p className="font-semibold text-xs md:text-sm xl:text-base max-w-min">{category.text}</p>
              </div>
            );
          })}
        </div>
        <ButtonSecondary href="/repuestos" text="Ver Lista Completa"/>
      </div>
    </section>
  );
};

export default RepuestosSection;

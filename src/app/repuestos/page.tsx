import Image from "next/image";
import {
  CategoryRepuesto,
  categories,
} from "../components/Repuestos/Repuestos";
import RepuestosCardGrid from "./RepuestosCardGrid";
import MarcasSection from "../components/MarcasSection/MarcasSection";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between bg-fondo pb-10">
      <section className="flex flex-col items-start w-11/12 lg:w-4/5 my-12 gap-4 text-texto">
        <h2 className=" font-semibold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
          Nuestra Línea de Productos
        </h2>
        <h4 className="mb-4">Repuestos importados originales y alternativos</h4>
        <RepuestosCardGrid />
      </section>
      <MarcasSection isRepuestosPage={true}/>
    </main>
  );
}

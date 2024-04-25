import Image from "next/image";
import Contact from "../components/Contact/Contact";

export default function SobreNowsotros() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between bg-texto pb-10">
      <section className="flex items-start w-11/12 lg:w-4/5 mt-12 gap-8 text-white">
        <Image src={'/logo-cucharepuestos2.jpg'} alt="Logo secundario de cucha repuestos" width={300} height={300} className="max-lg:hidden"/>
        <div className="flex flex-col gap-4 xl:gap-6">
          <h2 className=" font-semibold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            Sobre nosotros
          </h2>
          <p className="max-md:text-sm">
            Somos Cucha Repuestos, una empresa experimentada que ofrece un servicio completo para
            la línea de camiones Iveco. Iniciamos nuestras operaciones en el año
            2017, sin embargo, nuestros socios generales acumulan más de 20 años
            de experiencia en el rubro. Esta trayectoria nos permite ofrecer una
            atención única y personalizada, respaldada por un procedimiento
            administrativo que garantiza transparencia y cumplimiento.
          </p>
          <p className="font-semibold max-md:text-sm">
            Nos esforzamos por ofrecer a nuestros clientes un servicio óptimo en
            la compra de tus repuestos, con los más altos estándares de calidad,
            con plazos de entrega cortos y precios competitivos.
          </p>
        </div>
      </section>
      <Contact />
    </main>
  );
}

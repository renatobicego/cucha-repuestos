
import Image from "next/image";
import ButtonSecondary from "./Buttons/ButtonSecondary";

const HeroSection = () => {
  const cardsInfo = [
    {
      image: "/icons/manos-estrechandose.svg",
      title: "Comodidad y Seguridad",
      width: 71,
      height: 50,
      description:
        "Reparamos su camión con repuestos originales y alternativos",
    },
    {
      image: "/icons/camion-perfil.png",
      title: "Envíos a toda Argentina",
      width: 87,
      height: 50,
      description:
        "Reciba su compra en cualquier parte del país en tiempo y forma",
    },
    {
      image: "/icons/contrato.png",
      title: "Garantía y Calidad",
      width: 53,
      height: 50,
      description: "Somos líderes en el mercado de la Patagonia",
    },
  ];
  return (
    <section className="relative w-full flex flex-col items-center gap-4 xl:gap-6">
      <Image
        src={"/camiones-iveco.png"}
        className="max-md:h-1/2 md:max-lg:h-5/6 max-lg:object-cover lg:w-full absolute -top-16 md:-top-24 left-0"
        alt="Camiones iveco con los que trabajamos"
        width={1422}
        height={586}
        priority
      />
      <h1 className="relative z-10 w-11/12 md:w-3/5 lg:w-[55%] xl:w-1/2 text-center text-white leading-tight 2xl:leading-snug mt-12 xl:mt-16">
        Especialistas en cada repuesto de su camión
      </h1>
      <h4 className="text-white relative z-10 w-11/12 md:w-3/5 lg:w-1/2 text-center">
        Ofrecemos repuestos importados para camiones Iveco, de calidad
        comprobada y al mejor precio del mercado
      </h4>
      <ButtonSecondary href="/repuestos" text="Nuestros Repuestos" />
      <div className="w-11/12 lg:w-4/5 grid grid-cols-1 md:grid-cols-3 justify-between gap-3 xl:gap-6 relative z-10 mt-2 2xl:mt-6">
        {cardsInfo.map((card, i) => (
          <div
            key={i}
            className={`${
              i === cardsInfo.length - 1
                ? "bg-primario !text-white"
                : "bg-white"
            } flex flex-col w-full hover:scale-105 hover:rounded-sm transition-all
            items-start gap-2 px-4 md:px-6 py-5 md:py-9 text-texto drop-shadow-md`}
          >
            <div className="h-14 2xl:h-16">
              <Image
                className="mb-2"
                src={card.image}
                alt={"Icono de " + card.title}
                width={card.width}
                height={card.height}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="md:text-lg xl:text-xl 2xl:text-2xl font-semibold">{card.title}</h4>
              <p className="max-xl:text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

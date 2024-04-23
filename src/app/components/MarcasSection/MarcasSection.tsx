import dynamic from "next/dynamic";
const Carousel = dynamic(() => import('./Carrousel'), { ssr: false })
const MarcasSection = () => {
  const imageNames = [
    "applus.png",
    "cesca.png",
    "ciccarelli.png",
    "cnh.png",
    "dayco.png",
    "dbh.png",
    "etma.png",
    "euromotor.png",
    "fram.png",
    "hc.png",
    "illinois.png",
    "mahle.png",
    "monroe.png",
    "neolux.png",
    "nexpro.png",
    "nosso.png",
    "osram.png",
    "parker.png",
    "sachs.png",
    "sadar.png",
    "spicer.png",
    "vaden.png",
    "vmg.png",
    "wabco.png",
    "wega.png",
    "wixfilters.png",
  ];
  return (
    <section className="w-11/12 lg:w-4/5 bg-white text-texto flex flex-col mt-10 px-4 md:px-6 py-7 md:py-9 gap-6 drop-shadow-md">
      <h5 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">Marcas con las que trabajamos</h5>
      <div className="overflow-hidden w-full">
        <Carousel images={imageNames} />
      </div>
    </section>
  );
};

export default MarcasSection;

import dynamic from "next/dynamic";
import Image from "next/image";
const Carousel = dynamic(() => import("./Carousel"), { ssr: false });
const MarcasSection = ({ isRepuestosPage }: { isRepuestosPage?: boolean }) => {
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
    <section
      className={`w-11/12 lg:w-4/5 bg-white text-texto flex flex-col ${
        isRepuestosPage ? "mt-4" : "mt-10" 
      } px-4 md:px-6 py-7 md:py-9 gap-6 drop-shadow-md`}
    >
      <h5 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">
        Marcas con las que trabajamos
      </h5>
      {isRepuestosPage ? (
        <div className="flex flex-wrap gap-4 items-center self-center">
          {imageNames.map((image) => (
            <Image
              key={image}
              src={"/marcas/" + image}
              width={100}
              height={100}
              className="max-md:w-16 md:max-lg:w-20 max-lg:h-auto"
              alt={`Logo de marca ${image.split(".")[0]}`}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden w-full">
          <Carousel images={imageNames} />
        </div>
      )}
    </section>
  );
};

export default MarcasSection;

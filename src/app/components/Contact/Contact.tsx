import Image from "next/image";
import React from "react";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";


const Contact = () => {
  const payments = [
    {
      src: "american-express.png",
      alt: "American Express",
      width: 40,
      height: 40,
      size: "max-md:size-8"
    },
    {
      src: "cabal.png",
      alt: "Cabal",
      width: 40,
      height: 40,
      size: "max-md:size-8"
    },
    {
      src: "mastercard.png",
      alt: "Mastercard",
      width: 60,
      height: 37,
      size: "max-md:w-12 max-md:h-auto"
    },
    {
      src: "mercado-pago.png",
      alt: "Mercado Pago",
      width: 100,
      height: 56,
      size: "max-md:w-16 max-md:h-auto"
    },
    {
      src: "visa.png",
      alt: "Visa",
      width: 90,
      height: 51,
      size: "max-md:w-14 max-md:h-auto"
    },
  ];
  return (
    <section id="contacto" className="bg-texto flex flex-col items-center w-full py-16">
      <div className="flex w-11/12 lg:w-4/5 bg-white relative">
        <Image
          src={"/images/contacto-daily.webp"}
          alt="Daily en sección contacto"
          width={1199}
          height={882}
          className="h-full lg:w-1/3 xl:w-2/5 grayscale lg:h-auto object-cover max-md:object-[-130px] lg:object-[-100px] xl:object-left max-lg:absolute left-0 top-0"
        />
        <FormContact />
      </div>
      <div className="flex items-start bg-white w-11/12 lg:w-4/5 px-4 md:px-6 py-7 md:pt-9 md:pb-7 text-texto gap-4 md:gap-6 max-lg:flex-wrap">
        <div className="flex flex-col items-start gap-2 lg:w-1/3 xl:w-2/5 ">
          <h5 className="md:text-lg 2xl:text-xl font-semibold">Formas de pago</h5>
          <div className="flex items-center gap-2 max-xl:flex-wrap">
            {payments.map((image, i) => (
              <Image
                src={"/pagos/" + image.src}
                key={i}
                width={image.width}
                height={image.height}
                className={image.size}
                alt={"Logo de método de pago " + image.alt}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-3.5 justify-between">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;

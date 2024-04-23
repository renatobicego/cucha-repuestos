import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection";
import MarcasSection from "./components/MarcasSection/MarcasSection";
import RepuestosSection from "./components/Repuestos/RepuestosSection";
import SucursalSection from "./components/SucursalSection/SucursalSection";

export default function Home() {
  
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between bg-fondo">
      <HeroSection />
      <SucursalSection />
      <MarcasSection />
      <RepuestosSection />
      <Contact />
    </main>
  );
}

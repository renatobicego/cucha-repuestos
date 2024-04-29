export type CategoryRepuesto = {
  text: string;
  image: string;
  repuestos: string[];
};

export const categories: Record<string, CategoryRepuesto> = {
  motor: {
    text: "Motor",
    image: "motor.png",
    repuestos: [
      "Alternador",
      "Bombas",
      "Arranque",
      "Bloque y cárter",
      "Inyección",
      "Colectores",
      "Distribución",
      "Válvulas",
      "Juntas",
      "Sensores",
      "Tensor y correas",
      "Filtros",
      "Radiador",
      "Rodamiento",
      "Tubos",
    ].sort((a, b) => a.localeCompare(b)),
  },

  caja: {
    text: "Caja de cambios",
    image: "transmision.png",
    repuestos: [
      "Engranajes",
      "Sincronizados",
      "Horquillas",
      "Yugo salida caja",
      "Eje anclado",
      "Juntas",
      "Seguros",
      "Caja de distribución",
      "Corona y piñón",
      "Reten",
    ].sort((a, b) => a.localeCompare(b)),
  },
  embragues: {
    text: "Embragues",
    image: "motor-2.png",
    repuestos: [
      "Placa y disco",
      "Horquilla",
      "Ruleman empuje",
      "Bomba de embrague",
      "Cilindro auxiliar embrague",
      "Caño flexible de bomba a bombín",
      "Perno muñón horquilla de embrague",
      "Servo embragues",
      "Varilla de servo embrague",
      "Crapodina",
      "Bombín de Embrague",
    ].sort((a, b) => a.localeCompare(b)),
  },
  electricidad: {
    text: "Electricidad y \nelectrónica",
    image: "bateria.png",
    repuestos: [
      "Relay",
      "Faros",
      "Sensores",
      "Válvulas",
      "Ramal de cables",
      "Portalampras",
      "Lámparas",
      "Cableado de inyectores",
      "Mazo de cables",
      "Módulo de control",
      "Módulo ECM",
    ].sort((a, b) => a.localeCompare(b)),
  },
  frenos: {
    text: "Frenos",
    image: "frenos.png",
    repuestos: [
      "Campanas de freno",
      "Patines de freno",
      "Regulador patines",
      "Servo freno",
      "Compresor aire",
      "Válvulas de freno",
      "Tanque de aire",
      "Pulmón de freno",
      "Leva de freno",
      "Cable de frenos",
      "Zapata",
      "Kit de pernos",
      "Kit antivibradores",
      "Registros",
      "Pastillas",
    ].sort((a, b) => a.localeCompare(b)),
  },
  refrigeracion: {
    text: "Sistemas de \nrefrigeración",
    image: "radiador.png",
    repuestos: [
      "Radiador de motor",
      "Mangueras",
      "Termostato",
      "Depósito reserva líquido de radiador",
      "Radiador de calefactor",
      "Válvula control agua calefactor",
      "Caños Agua Compresor",
      "Compresor Aire A/C",
    ].sort((a, b) => a.localeCompare(b)),
  },
  carroceriaCabina: {
    text: "Carrocería \ny cabina",
    image: "camion-frente.png",
    repuestos: [
      "Paragolpe",
      "Guardabarros",
      "Capot",
      "Grilla radiador",
      "Puertas",
      "Caja de carga",
      "Portón caja de carga",
      "Techo",
      "Laterales de carrocería",
      "Estribos",
      "Disco de rueda",
      "Comando de dirección",
      "Comando de pedales",
      "Depósitos y tuberías",
      "Filtros",
      "Climatización/Aire acondicionado",
      "Ópticas",
    ].sort((a, b) => a.localeCompare(b)),
  },
  suspension: {
    text: "Suspensión",
    image: "suspension.png",
    repuestos: [
      "Amortiguador de eje",
      "Amortiguador de cabina",
      "Rótula",
      "Extremo",
      "Precap",
      "Barras estabilizadoras",
      "Barra de torsión",
      "Bujes",
      "Cruceta",
      "Centro cardán",
    ].sort((a, b) => a.localeCompare(b)),
  },
  neumatico: {
    text: "Sistema \nneumático",
    image: "rueda.png",
    repuestos: [
      "Acoples/Conecctores",
      "Válvulas",
      "Flexibles",
      "Juego de reparación",
      "Bombas",
      "Servos",
    ].sort((a, b) => a.localeCompare(b)),
  },
};
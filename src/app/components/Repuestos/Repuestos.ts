export type CategoryRepuesto = {
  text: string;
  image: string;
};

export const categories: Record<string, CategoryRepuesto> = {
    motoresComponentes: {
        text: "Motores y componentes",
        image: "motor.png"
    },
    bombas: {
        text: "Bombas",
        image: "piston.png"
    },
    transmisiones: {
        text: "Transmisiones",
        image: "transmision.png"
    },
    embragues: {
        text: "Embragues",
        image: "motor-2.png"
    },
    electricidad: {
        text: "Electricidad y electrónica",
        image: "bateria.png"
    },
    frenos: {
        text: "Frenos",
        image: "frenos.png"
    },
    refrigeracion: {
        text: "Sistemas de refrigeración",
        image: "radiador.png"
    },
    tensoresCorreas: {
        text: "Tensores y correas",
        image: "correas.png"
    },
    carroceriaCabina: {
        text: "Carrocería y cabina",
        image: "camion-frente.png"
    },
    suspension: {
        text: "Suspensión",
        image: "suspension.png"
    },
    neumatico: {
        text: "Sistema neumático",
        image: "rueda.png"
    },
};

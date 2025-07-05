// src/data/pricing.js

export const pricingData = [
    {
        id: 1,
        name: "Basic",
        price: "$0",
        description: "Ideal para individuos",
        features: ["1 Proyecto", "Soporte Comunitario", "Funciones Limitadas"],
        highlighted: false,
        buttonText: "Elegir Plan",
    },
    {
        id: 2,
        name: "Pro",
        price: "$19",
        description: "Para profesionales y equipos pequeños",
        features: ["10 Proyectos", "Soporte por Email", "Todas las Funciones"],
        highlighted: true,
        buttonText: "Elegir Plan",
    },
    {
        id: 3,
        name: "Enterprise",
        price: "Custom",
        description: "Perfecto para organizaciones grandes",
        features: ["Proyectos Ilimitados", "Soporte Dedicado", "Funciones Avanzadas"],
        highlighted: false,
        buttonText: "Contáctanos",
    },
];

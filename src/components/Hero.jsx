import React from 'react';
import { BsWhatsapp } from "react-icons/bs";


export default function Hero() {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Mostrá tu negocio <span className="text-blue-700">al mundo</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">
                Diseños profesionales, modernos y optimizados para celulares. Ideal para negocios locales, emprendedores y servicios independientes.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
                <a href="https://wa.me/5491121866976?text=Hola%20estoy%20interesado%20en%20una%20página%20web" target="_blank">
                    <button className="flex items-center gap-2 px-8 py-3 lg:mb-0 bg-blue-700 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-900 transition">
                        Contactar por WhatsApp
                        <BsWhatsapp className='text-2xl' />
                    </button>
                </a>
                <a href="#pricing">
                    <button className="sm:ml-4 px-8 py-3 border border-blue-700 text-blue-700 rounded-lg text-lg font-semibold hover:bg-blue-100 transition">
                        Más información
                    </button>
                </a>
            </div>
        </section>
    )
}

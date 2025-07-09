import React from 'react';
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="flex flex-col text-center px-10 py-10 bg-blue-50 text-gray-700">
            <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
                <p className="text-xl font-semibold">
                    Esta es una muestra de diseño web. Podés pedir tu página personalizada.
                </p>
                <a
                    href="https://wa.me/5491121866976?text=Hola%20estoy%20interesado%20en%20una%20página%20web"
                    target="_blank"
                    className="inline-flex items-center gap-2 inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition"
                >
                    Contactar por WhatsApp
                    <BsWhatsapp className='text-2xl' />
                </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Pedro Hoffmann. Todos los derechos reservados.
            </p>
        </footer>
    )
}

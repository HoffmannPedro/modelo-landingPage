import React from 'react'

export default function Hero() {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Welcome to <span className="text-blue-700">MyStartup</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">
                Desarrolle su próxima idea más rápido con nuestra plataforma moderna, escalable y fácil de usar.
            </p>
            <div>
                <button className="px-8 py-3 mb-4 lg:mb-0 bg-blue-700 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-900 transition">
                    Iniciar prueba gratuita
                </button>
                <button className="sm:ml-4 px-8 py-3 border border-blue-700 text-blue-700 rounded-lg text-lg font-semibold hover:bg-blue-100 transition">
                    Más información
                </button>
            </div>
        </section>
    )
}

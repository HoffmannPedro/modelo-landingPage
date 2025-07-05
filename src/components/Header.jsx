// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useClickOutside(() => {
        if (isOpen) setIsOpen(false);
    });

    // Bloquear scroll del body cuando el menú esté abierto
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            {/* HEADER (z-30 para que quede siempre arriba) */}
            <header className="w-full bg-white bg-opacity-80 fixed top-0 left-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" className="text-2xl font-bold text-blue-700">
                                MyStartup
                            </a>
                        </div>

                        {/* Enlaces de escritorio (md+) */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-blue-700 font-medium"
                            >
                                Características
                            </a>
                            <a
                                href="#pricing"
                                className="text-gray-700 hover:text-blue-700 font-medium"
                            >
                                Precios
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-blue-700 font-medium"
                            >
                                Contacto
                            </a>
                            <a
                                href="#get-started"
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                            >
                                Comenzar
                            </a>
                        </div>

                        {/* Botón “hamburger” para móvil (<md) */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                                className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                            >
                                <svg
                                    className={`h-6 w-6 transition-colors ${isOpen ? "stroke-blue-700" : "stroke-gray-700"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={
                                            isOpen
                                                ? "M6 18L18 6M6 6l12 12" // Ícono “X”
                                                : "M4 6h16M4 12h16M4 18h16" // Ícono “hamburger”
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Overlay + desenfoque (z-20 bajo el header) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-transparent backdrop-blur-md z-20"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Menú móvil desplegable (z-40 encima de todo) */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`absolute top-16 inset-x-0 bg-white border-t border-gray-200 md:hidden transform transition-transform ${isOpen ? "scale-y-100" : "scale-y-0"
                    } origin-top z-40`}
            >
                <div className="px-4 pt-4 pb-6 space-y-4">
                    <a
                        href="#features"
                        className="block text-gray-700 hover:text-blue-700 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Features
                    </a>
                    <a
                        href="#pricing"
                        className="block text-gray-700 hover:text-blue-700 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Pricing
                    </a>
                    <a
                        href="#contact"
                        className="block text-gray-700 hover:text-blue-700 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                    <a
                        href="#get-started"
                        className="block px-4 py-2 bg-blue-700 text-white rounded-md text-center hover:bg-blue-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </>
    );
}

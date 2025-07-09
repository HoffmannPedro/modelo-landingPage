import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {

    // Inicializa React Hook Form.
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm({
        mode: 'onBlur', // Valida al salir del campo
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
    });

    // Se llama al enviar el formulario (si todo es válido)
    const onSubmit = async (data) => {
        // Simula llamada a API. Solo hacemos un delay.
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Datos enviados', data);

        reset();
    }
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Contáctanos</h2>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" placeholder="Nombre" className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-300 border-red-300" : "focus:ring-blue-200 border-gray-300"
                            }`}
                            {...register("name", {
                                required: "El nombre es obligatorio",
                                minLength: {
                                    value: 2,
                                    message: "El nombre debe tener al menos 2 caracteres",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input type="email" placeholder="Email" className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-300 border-red-300" : "focus:ring-blue-200 border-gray-300"
                            }`}
                            {...register("email", {
                                required: "El email es obligatorio",
                                pattern: {
                                    value:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Formato de email no válido",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <textarea placeholder="Mensaje..." className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? "focus:ring-red-300 border-red-300" : "focus:ring-blue-200 border-gray-300"
                            }`}
                            rows={4}
                            {...register("message", {
                                required: "El mensaje es obligatorio",
                                minLength: {
                                    value: 10,
                                    message: "El mensaje debe tener al menos 10 caracteres",
                                },
                            })}
                        ></textarea>
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full px-6 py-3 text-lg font-semibold rounded-lg transition ${isSubmitting
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-blue-700 text-white hover:bg-blue-900"
                                }`}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar"}
                        </button>
                    </div>
                    {isSubmitSuccessful && (
                        <p className="text-center text-green-600 mt-4">
                            ¡Mensaje enviado correctamente!
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

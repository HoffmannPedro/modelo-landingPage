import React from 'react'

export default function Pricing({ plans }) {
    return (
        <section id="pricing" className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Precios</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Planes */}
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`bg-white rounded-xl p-8 shadow text-center ${plan.highlighted
                                    ? "shadow-lg border-2 border-blue-700 transform scale-105"
                                    : "border border-blue-200"
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-700">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-4">{plan.price}</p>
                            <p className="mb-6 text-gray-600">{plan.description}</p>
                            <ul className="mb-6 text-gray-600 space-y-2">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx}>✔️ {feat}</li>
                                ))}
                            </ul>
                            <button className="w-full px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition">
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import React from 'react'

export default function Features({ items }) {
    return (
        <section id="features" className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Características</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {items.map((feature) => (
                        <div 
                            key={feature.id}
                            className='bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition'
                        >
                            
                            <div className='text-4xl mb-3'>{feature.icon}</div>

                            <h3 className='text-xl font-semibold mb-2 text-blue-700'>
                                {feature.title}
                            </h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    );
}

import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center py-6 text-gray-500">
            © {new Date().getFullYear()} MyStartup. All rights reserved.
        </footer>
    )
}

"use client"

import { Ubuntu } from "next/font/google"
import "./globals.css"
import "./App.sass"
import { CartProvider } from "@/context/CartContext"

const font = Ubuntu({ 
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"]
})

// export const metadata = {
//     title: "Multi-step form",
//     description: "Multi-step form frontend mentor coding challenge",
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-very-light-gray">
            <body className={`${font.className} relative pb-24`}>
                <main>
                    <CartProvider>
                    {children}

                    </CartProvider>
                </main>
            </body>
        </html>
    )
}

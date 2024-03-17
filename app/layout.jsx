"use client"

import { Manrope } from "next/font/google"
import { CartProvider } from "@/context/CartContext"
import Footer from "@/components/Layout/Footer"

import "./globals.css"
import "./App.sass"
import { ModalProvider } from "@/context/Modal"
import Cart from "@/components/Layout/Modals/Cart"

const font = Manrope({ 
    subsets: ["latin"]
})

// export const metadata = {
//     title: "Multi-step form",
//     description: "Multi-step form frontend mentor coding challenge",
// }

export default function RootLayout({ children }) {
    
    
    return (
        <html lang="en">
            <body id="app" className={`${font.className}`}>
                <CartProvider>
                <ModalProvider>
                    {children}
                    <aside>
                        <Cart />
                        {/* <SideDrawer isOpen={sidedrawer} toggleHandler={toggleSidedrawer} /> */}
                    </aside>
                </ModalProvider>
                </CartProvider>
                <Footer />
            </body>
        </html>
    )
}

"use client"

import { Manrope } from "next/font/google"
import { ModalProvider } from "@/context/Modal"
import { CartProvider } from "@/context/CartContext"

import Footer from "@/components/Layout/Footer"
import Cart from "@/components/Layout/Modals/Cart"
import SideDrawer from "@/components/Layout/Modals/SideDrawer"

import "./globals.css"
import "./App.sass"

const font = Manrope({ 
    subsets: ["latin"]
})

// export const metadata = {
//     title: "",
//     description: "",
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
                        <SideDrawer />
                    </aside>
                </ModalProvider>
                </CartProvider>
                <Footer />
            </body>
        </html>
    )
}

import { Manrope } from "next/font/google"
import Provider from "@/context/Provider"

import Footer from "@/components/Layout/Footer"
import Cart from "@/components/Layout/Modals/Cart"
import SideDrawer from "@/components/Layout/Modals/SideDrawer"

import "./globals.css"
import "./App.sass"

const font = Manrope({ 
    subsets: ["latin"]
})

export const metadata = {
    title: "Audiophile",
    description: "E-commerce website",
}

export default ({ children }) => (
    <html lang="en" className={`${font.className}`}>
        <body className="flex flex-col min-h-screen">
            <Provider>
                {children}
                <aside>
                    <Cart />
                    <SideDrawer />
                </aside>
            </Provider>
            <Footer />
        </body>
    </html>
)
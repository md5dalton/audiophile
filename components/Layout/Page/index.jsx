"use client"
import { useState } from "react"
import Footer from "../Footer"
import Header from "../Header"
import Cart from "../Modals/Cart"
import SideDrawer from "../Modals/SideDrawer"

import "./styles.sass"

export default ({ name, header, children }) => {

    const [ sidedrawer, setSidedrawer ] = useState(false)
    const [ cart, setCart ] = useState(false)

    const toggleSidedrawer = () => setSidedrawer(!sidedrawer)
    const toggleCart = () => setCart(!cart)
    
    return (
        <>
            <Header 
                className={name} 
                sidedrawerToggleHandler={toggleSidedrawer}
                cartToggleHandler={toggleCart}
            >
                {header}
            </Header>
            <main className={`page ${name}`}>
                {children}
            </main>
            <aside>
                {/* <Cart isOpen={cart} toggleHandler={toggleCart} />
                <SideDrawer isOpen={sidedrawer} toggleHandler={toggleSidedrawer} /> */}
            </aside>
            {/* <Footer /> */}
        </>
    )
}
"use client" 

import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

export const ModalProvider = ({ children }) => {

    const [ sidedrawer, setSidedrawer ] = useState(false)
    const [ cart, setCart ] = useState(false)

    const toggleSidedrawer = () => setSidedrawer(!sidedrawer)
    const toggleCart = () => setCart(!cart)
    
    return <ModalContext.Provider
        value={{
            sidedrawer,
            cart,
            toggleSidedrawer,
            toggleCart
        }}
    >
        {children}
    </ModalContext.Provider>
}
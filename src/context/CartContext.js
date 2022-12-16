import React, { createContext, useState } from "react"
import { getProduct } from "../Functions"

const CartContext = createContext()

export function CartProvider ({ children }) {

    const [ cart, setCart ] = useState([])

    const clearCart = () => setCart([])

    const addCart = (slug, quantity) => {
        
        let product = cart.find(item => item.slug === slug)

        setCart(
            (product ? 
            cart.map(item => slug === item.slug ? {...item, quantity: quantity} : item) :
            [...cart, {slug, quantity}]).filter(item => item.quantity)
        )
        
    }

    const getTotalPrice = () => cart.reduce((a, { slug, quantity }) => {

        const { price } = getProduct(slug)

        return a + price * quantity

    })


    return (
        <CartContext.Provider 
            value={{ 
                cart,
                addCart,
                clearCart,
                getTotalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
} 

export default CartContext
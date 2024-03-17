import React, { createContext, useContext, useEffect, useState } from "react"
import { getProduct } from "../Functions"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider =  ({ children }) => {

    const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem("cart")) || [])

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

    }, 0)

    useEffect(() => {
        
        localStorage.setItem("cart", JSON.stringify(cart))
        
    }, [cart]);


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
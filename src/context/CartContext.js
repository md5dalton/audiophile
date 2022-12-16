import React, { createContext, useState } from "react"
import { getProduct } from "../Functions"

const CartContext = createContext()

export function CartProvider ({ children }) {

    const dumy = [
        {
            slug: "xx99-mark-two-headphones",
            quantity: 6
        },
        {
            slug: "zx7-speaker",
            quantity: 2
        },
        {
            slug: "yx1-earphones",
            quantity: 1
        }
    ]

    const [ products, setProducts ] = useState(dumy.map(({ slug, quantity }) => ({ ...getProduct(slug), quantity: quantity })))
    
    return (
        <CartContext.Provider value={{ products }}>
            {children}
        </CartContext.Provider>
    )
} 

export default CartContext
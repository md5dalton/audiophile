"use client"

import { signal, effect } from "@preact/signals-react"

const storage = global.window?.localStorage

const localCart = storage?.getItem("cart")

export const cart = signal(localCart ? JSON.parse(localCart) : [])

effect(() => storage ? storage.setItem("cart", JSON.stringify(cart.value)) : null)

export const clearCart = () => cart.value = []

export const addToCart = (slug, quantity, price) => {
        
    let product = cart.value.find(item => item.slug === slug)

    cart.value = product ? 
        cart.value.map(item => slug === item.slug ? {...item, quantity: quantity + item.quantity} : item) :
        [...cart.value, {slug, quantity, price}]
    
}

export const totalPrice = () => cart.value.reduce((a, { quantity, price }) => {

    return a + price * quantity

}, 0)
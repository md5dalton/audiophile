"use client"

import { signal, effect } from "@preact/signals-react"

export const sidedrawer = signal(false)
export const cart = signal(false)

export const toggleSidedrawer = () => {
    sidedrawer.value = !sidedrawer.peek()
    console.log("side", sidedrawer.value)

}
export const toggleCart = () => cart.value = !cart.value
import { signal } from "@preact/signals-react"

const cart = signal(localStorage.getItem("cart"))
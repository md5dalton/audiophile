"use client"

import { useState } from "react"
// import GoBackLink from "../../UI/GoBackLink"
// import CheckoutModal from "../../Layout/Modals/CheckoutModal"
// import Summary from "./Summary"
// import FormCore from "./FormCore"

import "./styles.sass"
import { useCart } from "@/context/CartContext"
import Header from "@/components/Layout/Header"
import GoBackLink from "@/components/UI/GoBackLink"

export default () => {

    const [ modalOpen, setModalOpen ] = useState(false)

    const modalToggleHandler = () => setModalOpen(!modalOpen)

    const submitHandler = ev => {

        ev.preventDefault()

        modalToggleHandler()

    }

    const { getTotalPrice } = useCart()
    
    const totalPrice = getTotalPrice()
    const shipping = 50
    const VAT = 1.2 * totalPrice
    const grandTotal = shipping + VAT

    const name = "checkout"

    return (
        <>
            <Header className={name} />
            <main className={`page ${name}`}>
                <section>
                    <GoBackLink />
                </section>
                <form onSubmit={submitHandler} className="container">
                    {/* <FormCore />
                    <Summary /> */}
                </form>
                {/* <CheckoutModal isOpen={modalOpen} toggleHandler={modalToggleHandler} grandTotal={grandTotal} /> */}
            </main>
        </>
    )
}
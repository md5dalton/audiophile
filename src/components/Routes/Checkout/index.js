import React, { useContext, useState } from "react"
import Page from "../../Layout/Page"
import GoBackLink from "../../UI/GoBackLink"
import CartContext from "../../../context/CartContext"
import CheckoutModal from "../../Layout/Modals/CheckoutModal"
import Summary from "./Summary"
import FormCore from "./FormCore"

import "./styles.sass"

export default () => {

    const [ modalOpen, setModalOpen ] = useState(true)

    const modalToggleHandler = () => setModalOpen(!modalOpen)

    const submitHandler = ev => {

        ev.preventDefault()

        modalToggleHandler()

    }

    const { getTotalPrice } = useContext(CartContext)
    
    const totalPrice = getTotalPrice()
    const shipping = 50
    const VAT = 1.2 * totalPrice
    const grandTotal = shipping + VAT

    return (
        <Page name="checkout">
            <section>
                <GoBackLink />
            </section>
            <form onSubmit={submitHandler} className="container">
                <FormCore />
                <Summary />
            </form>
            <CheckoutModal isOpen={modalOpen} toggleHandler={modalToggleHandler} grandTotal={grandTotal} />
        </Page>
    )
}
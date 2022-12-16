import React, { useContext } from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import Picture from "../../UI/Picture"
import Button from "../../UI/Button"
import { formatPrice, getProduct } from "../../../Functions"

import "./styles.sass"
import GoBackLink from "../../UI/GoBackLink"
import CartContext from "../../../context/CartContext"

export default () => {

    const formparts = [
        {
            title: "billing details",
            inputs: [
                {
                    label: "Name",
                    placeholder: "pakalitha mosisili"
                },
                {
                    label: "Email Address",
                    placeholder: "pakalitha@mail.com"
                },
                {
                    label: "Phone Number",
                    placeholder: "+266 22316429"
                }
            ]
        },
        {
            title: "shipping info",
            inputs: [
                {
                    label: "Your Address",
                    placeholder: "Tsoelike Lekhalong"
                },
                {
                    label: "ZIP Code",
                    placeholder: "2311"
                },
                {
                    label: "City",
                    placeholder: "Qacha's Nek"
                },
                {
                    label: "Country",
                    placeholder: "Lesotho"
                }
            ]
        },
        {
            title: "payment details",
            inputs: [
                {
                    label: "e-Money",
                    type: "radio"
                },
                {
                    label: "Cash on Delivery",
                    type: "radio"
                },
                {
                    label: "e-Money Number",
                    placeholder: "238521993"
                },
                {
                    label: "e-Money PIN",
                    placeholder: "6891"
                }
            ]
        }
    ]

    const { products } = useContext(CartContext)

    const prices = [
        {
            name: "total",
            value: 5396
        },
        {
            name: "shipping",
            value: 50
        },
        {
            name: "val (included)",
            value: 1079
        },
        {
            name: "grand total",
            value: 5446
        }
    ]

    return (
        <Page name="checkout">
            <form>
                <section>
                    <GoBackLink />
                </section>
                <section>
                    <div className="form-section">
                        <h4>checkout</h4>
                        <List className="fieldsets"
                            items={formparts} 
                            itemHandler={({ title, inputs }, index) => (
                                <li key={index} className="fieldset">
                                    <subtitle>{title}</subtitle>
                                    <List className="inputs"
                                        items={inputs}
                                        itemHandler={({ label, type, placeholder }, index2) => (
                                            <li key={index2} className={type}>
                                                <label>
                                                    <subtext>{label}</subtext>
                                                </label>
                                                <div className="input-wrapper">
                                                    <input type={type} placeholder={placeholder} />
                                                </div>
                                            </li>
                                        )}
                                    /> 
                                </li>
                            )} 
                        />
                    </div>
                </section>
                <section>
                    <div className="form-section summary">
                        <h6>summary</h6>
                        <List className="order-summary"
                            items={products}
                            itemHandler={({ image, name, price, quantity }, index) => (
                                <li key={index}>
                                    <Picture {...image} />
                                    <div className="details">
                                        <div className="name">{name}</div>
                                        <div className="price">{formatPrice(price)}</div>
                                    </div>
                                    <div className="quantity-counter">x{quantity}</div> 
                                </li>
                            )}
                        />
                        <List className="prices"
                            items={prices}
                            itemHandler={({ name, value }, index) => (
                                <li key={index}>
                                    <span className="name">{name}</span>
                                    <span className="price">{formatPrice(value)}</span>
                                </li>
                            )}
                        />
                        <Button className="primary-button" onClick={()=>1} onSubmit={()=>1}>continue & pay</Button>
                    </div>
                </section>
            </form>
        </Page>
    )
}
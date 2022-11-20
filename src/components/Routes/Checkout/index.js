import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import Picture from "../../UI/Picture"
import Button from "../../UI/Button"
import { formatPrice, getProduct } from "../../../Functions"

import "./styles.sass"

export default () => {

    const formparts = [
        {
            title: "billing details",
            inputs: [
                {
                    label: "name",
                    placeholder: "pakalitha mosisili"
                },
                {
                    label: "email address",
                    placeholder: "pakalitha@mail.com"
                },
                {
                    label: "phone number",
                    placeholder: "+266 22316429"
                }
            ]
        },
        {
            title: "shipping info",
            inputs: [
                {
                    label: "your address",
                    placeholder: "tsoelike likhalong"
                },
                {
                    label: "ZIP code",
                    placeholder: "2311"
                },
                {
                    label: "city",
                    placeholder: "qacha's nek"
                },
                {
                    label: "country",
                    placeholder: "lesotho"
                }
            ]
        },
        {
            title: "payment details",
            inputs: [
                {
                    label: "e-Money",
                    type: "checkbox"
                },
                {
                    label: "Cash on Delivery",
                    type: "checkbox"
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

    const cart = [
        {
            slug: "yx1-earphones",
            quantity: 1
        },
        {
            slug: "xx99-mark-one-headphones",
            quantity: 6
        },
        {
            slug: "zx7-speaker",
            quantity: 2
        }
    ]

    const cartItems = cart.map(({ slug, quantity }) => ({ ...getProduct(slug), quantity: quantity }))

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
                    <Link className="go-back">go back</Link>
                </section>
                <section>
                    <h4>checkout</h4>
                    <List className="form-parts"
                        items={formparts} 
                        itemHandler={({ title, inputs }, index) => (
                            <li key={index}>
                                <div className="sub-title">{title}</div>
                                <List
                                    items={inputs}
                                    itemHandler={({ label, type, placeholder }, index2) => (
                                        <li key={index2}>
                                            <label>{label}</label>
                                            <input type={type} placeholder={placeholder} />
                                        </li>
                                    )}
                                /> 
                            </li>
                        )} 
                    />
                </section>
                <section>
                    <h6>summary</h6>
                    <List
                        items={cartItems}
                        itemHandler={({ image, name, price, quantity }, index) => (
                            <li key={index}>
                                <Picture {...image} />
                                <div className="details">
                                    <h4>{name}</h4>
                                    <h6 className="price">{formatPrice(price)}</h6>
                                </div>
                                <div className="quantity-counter">x{quantity}</div> 
                            </li>
                        )}
                    />
                    <div className="prices">
                        <List
                            items={prices}
                            itemHandler={({ name, value }, index) => (
                                <li key={index}>
                                    <span>{name}</span>
                                    <span>{formatPrice(value)}</span>
                                </li>
                            )}
                        />
                    </div>
                </section>
                <section>
                    <Button>continue & pay</Button>
                </section>
            </form>
        </Page>
    )
}
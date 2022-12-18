import React from "react"
import { Link } from "react-router-dom"

import Page from "../../Layout/Page"
import About from "../../Layout/About"
import CategoriesLinks from "../../Layout/CategoriesLinks"
import Products from "./Products"

import "./styles.sass"

export default () => {

    const header = (
        <section className="hero">
            <div className="overline">New product</div>
            <h1 className="name">XX99 Mark II Headphones</h1>
            <p className="description">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to="/p?s=xx99-mark-two-headphones" className="button primary CTA">See product</Link>
        </section>
    )
    
    return (
        <Page name="home" header={header}>
            <CategoriesLinks />
            <Products />
            <About />
        </Page>
    )
}
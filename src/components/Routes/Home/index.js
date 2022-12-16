import React from "react"
import Button from "../../UI/Button"
import Picture from "../../UI/Picture"

import Page from "../../Layout/Page"
import About from "../../Layout/About"
import CategoriesLinks from "../../Layout/CategoriesLinks"
import { getResponsiveImages } from "../../../Functions"

import "./styles.sass"
import { Link } from "react-router-dom"

export default () => {

    const images = [
        "speaker-zx9.png", 
        "speaker-zx7.jpg", 
        "earphones-yx1.jpg"
    ].map(image => getResponsiveImages("./assets/home", `image-${image}`))

    const header = (
        <section className="hero">
            <overline>New product</overline>
            <h1>XX99 Mark II Headphones</h1>
            <p>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to="/p?s=xx99-mark-two-headphones" className="link-button">See product</Link>
        </section>
    )
    
    return (
        <Page name="home" header={header}>
            <CategoriesLinks />
            <section className="products">
                <div className="product primary">
                    <Picture {...images[0]} />
                    <h1>ZX9 speaker</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/p?s=zx9-speaker" className="link-button">See product</Link>
                </div>
                <div className="product secondary colapsed">
                    <Picture {...images[1]} />
                    <h4>ZX7 speaker</h4>
                    <Link to="/p?s=zx7-speaker" className="link-button">See product</Link>
                </div>
                <div className="product secondary dettached">
                    <Picture {...images[2]} />
                    <h4>YX1 earphones</h4>
                    <Link to="/p?s=yx1-earphones" className="link-button">See product</Link>
                </div>
            </section>
            <About />
        </Page>
    )
}
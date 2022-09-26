import React, { Fragment } from "react"
import Button from "../../UI/Button"
import List from "../../UI/List"
import { Link } from "react-router-dom"
import Icon from "../../UI/Icon"
import Picture from "../../UI/Picture"

import "./styles.sass"

const categories = ["headphones", "speakers", "earphones"]

export default () => {

    const getResponsiveImages = (prepend, image) => ({
        mobile: `${prepend}/mobile/${image}`,
        tablet: `${prepend}/tablet/${image}`,
        desktop: `${prepend}/desktop/${image}`
    })

    const categoryHandler = category => (
        <div key={category} className="category">
            <img src={`./assets/shared/desktop/image-category-thumbnail-${category}.png`} alt="" />
            <div className="name">{category}</div>
            <Link to={`product/${category}`}>
                <span>shop</span>
                <Icon name="arrow-right" />
            </Link>
        </div>
    )

    const images = [
        "speaker-zx9.png", 
        "speaker-zx7.jpg", 
        "earphones-yx1.jpg"
    ].map(image => getResponsiveImages("./assets/home", `image-${image}`))
    
    return (
        <div className="home">
            <section className="hero">
                <overline>New product</overline>
                <h1>XX99 Mark II Headphones</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button>See product</Button>
            </section>
            <section className="categories">
                <List items={categories} itemHandler={categoryHandler} />
            </section>
            <section className="products">
                <div className="product">
                    <Picture {...images[0]} />
                    <h1>ZX9 speaker</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Button>See product</Button>
                </div>
                <div className="product">
                    <Picture {...images[1]} />
                    <h4>ZX7 speaker</h4>
                    <Button>See product</Button>
                </div>
                <div className="product">
                    <Picture {...images[2]} />
                    <h4>YX1 earphones</h4>
                    <Button>See product</Button>
                </div>
            </section>
            <section className="about">
                <Picture {...getResponsiveImages("./assets/shared", "image-best-gear.jpg")} />
                <h4>Bringing you the <span>best</span> audio gear</h4>
                <p>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.
                </p>
            </section>
        </div>
    )
}
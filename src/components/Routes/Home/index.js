import React, { Fragment } from "react"
import Button from "../../UI/Button"
import List from "../../UI/List"
import { Link } from "react-router-dom"
import Icon from "../../UI/Icon"

const categories = [
    "headphones",
    "speakers",
    "earphones"
]

export default () => {
    const itemHandler = category => (
        <div key={category} className="category">
            <img src={`./assets/shared/desktop/image-category-thumbnail-${category}.png`} alt="" />
            <div className="name">{category}</div>
            <Link to={`product/${category}`}>
                <span>shop</span>
                <Icon name="arrow-right" />
            </Link>
        </div>
    )
    
    return (
        <Fragment>
            <section className="hero">
                <overline>New product</overline>
                <h1>XX99 Mark II Headphones</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button>See product</Button>
            </section>
            <section className="categories">
                <List items={categories} itemHandler={itemHandler} />
            </section>
        </Fragment>
    )
}
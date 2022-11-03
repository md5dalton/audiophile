import React from "react"
import { Link, useLocation } from "react-router-dom"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import About from "../../Layout/About"
import Picture from "../../UI/Picture"
import CategoriesLinks from "../../Layout/CategoriesLinks"

import "./styles.sass"

export default () => {

    const location = useLocation()

    const { name, items } = location.state

    const header = <h4>{name}</h4>

    const itemHandler = ({ image, new: isNew, name, description, slug }, index) => (
        <li key={index} className="product-item">
            <Picture {...image} />
            <div className="details">
                {!isNew && <overline className="new-product">new product</overline>}
                <h4>{name}</h4>
                <p>{description}</p>
                <Link to={`/p/${slug}`} className="link-button">see product</Link>
            </div>
        </li>
    )
    
    return (
        <Page name="category headphones" header={header}>
            <section className="products">
                <List items={items} itemHandler={itemHandler} />
            </section>
            <CategoriesLinks />
            <About />
        </Page>
    )
}
import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import About from "../../Layout/About"
import Picture from "../../UI/Picture"
import useData from "../../../hooks/useData"
import CategoriesLinks from "../../Layout/CategoriesLinks"

import "./styles.sass"

export default () => {

    const { headphones, earphones, speakers } = useData()

    console.log(headphones)
    const header = <h4>headphones</h4>

    const itemHandler = ({ image, new: isNew, name, description, slug }, index) => (
        <li key={index} className="product-item">
            <Picture {...image} />
            <div className="details">
                {!isNew && <overline className="new-product">new product</overline>}
                <h4>{name}</h4>
                <p>{description}</p>
                <Link to={slug} className="link-button">see product</Link>
            </div>
        </li>
    )
    
    return (
        <Page name="category headphones" header={header}>
            <section className="products">
                <List items={headphones} itemHandler={itemHandler} />
            </section>
            <CategoriesLinks />
            <About />
        </Page>
    )
}
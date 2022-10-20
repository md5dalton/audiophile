import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Icon from "../../UI/Icon"

import "./styles.sass"

const categories = [
    "headphones", 
    "speakers", 
    "earphones"
]

export default () => {

    const categoryHandler = category => (
        <li key={category} className="category">
            <img src={`./assets/shared/desktop/image-category-thumbnail-${category}.png`} alt="" />
            <div className="name">{category}</div>
            <Link to={`product/${category}`}>
                <span>shop</span>
                <Icon name="arrow-right" />
            </Link>
        </li>
    )

    return (
        <section className="categories">
            <List items={categories} itemHandler={categoryHandler} />
        </section>
    )
}
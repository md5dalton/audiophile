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
            <div className="category-thumbnail">
                <img src={`./assets/shared/desktop/image-category-thumbnail-${category}.png`} alt="" />
            </div>
            <div className="details">
                <div className="name">{category}</div>
                <Link to={`/c?n=${category}`} className="button terciary">
                    <span>shop</span>
                    <Icon name="arrow-right" />
                </Link>
            </div>
        </li>
    )

    return (
        <section className="categories-links">
            <List className="categories-list" items={categories} itemHandler={categoryHandler} />
        </section>
    )
}
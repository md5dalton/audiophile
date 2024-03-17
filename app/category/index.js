import React from "react"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import About from "../../Layout/About"
import Picture from "../../UI/Picture"
import ProductCard from "./ProductCard"
import CategoriesLinks from "../../Layout/CategoriesLinks"
import { getCategoryItems } from "../../../Functions"
import { Link, useSearchParams } from "react-router-dom"

import "./styles.sass"

export default () => {

    const [ searchParams, setSearchParams ] = useSearchParams()

    const name = searchParams.get("n")

    const items = getCategoryItems(name)

    const header =  (
        <section>
            <h4 className="category-title">{name}</h4>
        </section>
    )

    const itemHandler = (item, index) => <ProductCard {...item} key={index} />
    
    return (
        <Page name="category headphones" header={header}>
            <section className="products">
                <List items={items} itemHandler={itemHandler} className="products-list" />
            </section>
            <CategoriesLinks />
            <About />
        </Page>
    )
}
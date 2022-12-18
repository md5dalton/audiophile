import React from "react"
import { useSearchParams } from "react-router-dom"
import { getProduct } from "../../../Functions"

import Page from "../../Layout/Page"
import About from "../../Layout/About"
import CategoriesLinks from "../../Layout/CategoriesLinks"

import Details from "./Details"
import Gallery from "./Gallery"
import Related from "./Related"

import "./styles.sass"

export default () => {

    const [ searchParams, setSearchParams ] = useSearchParams()
    
    const slug = searchParams.get("s")
    
    const product = getProduct(slug)
    
    return product && (
        <Page name="product">
            <Details {...product} />
            <Gallery {...product} />
            <Related {...product} />
            <CategoriesLinks />
            <About />
        </Page>
    )
}
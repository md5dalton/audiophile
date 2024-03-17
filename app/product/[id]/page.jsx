import { getProduct } from "@/Functions"

import Page from "@/components/Layout/Page"
import About from "@/components/Layout/About"
import CategoriesLinks from "@/components/Layout/CategoriesLinks"

import Details from "./Details"
import Gallery from "./Gallery"
import Related from "./Related"

import "./styles.sass"

export default ({ params: { id } }) => {

    const product = getProduct(id)
    
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
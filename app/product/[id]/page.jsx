import { getProduct } from "@/Functions"

import About from "@/components/Layout/About"
import Header from "@/components/Layout/Header"
import CategoriesLinks from "@/components/Layout/CategoriesLinks"

import Details from "./Details"
import Gallery from "./Gallery"
import Related from "./Related"

import "./styles.sass"

export default ({ params: { id } }) => {
    
    const name = "product"

    const product = getProduct(id)
    
    return (
        <>
            <Header className={name} />
            <main className={`page ${name}`}>
                <Details {...product} />
                <Gallery {...product} />
                <Related {...product} />
                <CategoriesLinks />
                <About />
            </main>
        </>
    )
}
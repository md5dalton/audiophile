import React from "react"
import Page from "../../Layout/Page"
import CategoriesLinks from "../../Layout/CategoriesLinks"

import "./styles.sass"
import About from "../../Layout/About"

export default () => {

    const header = <h4>headphones</h4>
    
    return (
        <Page name="category headphones" header={header}>
            <CategoriesLinks />
            <About />
        </Page>
    )
}
import React, { Fragment } from "react"
import Footer from "./Footer"
import Header from "./Header"

export default ({ children }) => (
    <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
)
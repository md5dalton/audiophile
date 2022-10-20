import React, { Fragment } from "react"
import Footer from "../Footer"
import Header from "../Header"

export default ({ name, header, children }) => (
    <Fragment>
        <Header className={name}>
            {header}
        </Header>
        <main className={`page ${name}`}>
            {children}
        </main>
        <Footer />
    </Fragment>
)
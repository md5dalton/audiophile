import React, { Fragment } from "react"
import Footer from "../Footer"
import Header from "../Header"
import Cart from "../Modals/Cart"

import "./styles.sass"

export default ({ name, header, children }) => (
    <Fragment>
        <Header className={name}>
            {header}
        </Header>
        <main className={`page ${name}`}>
            {children}
        </main>
        <aside>
            <Cart />
        </aside>
        <Footer />
    </Fragment>
)
import React, { Fragment, useState } from "react"
import Footer from "../Footer"
import Header from "../Header"
import Cart from "../Modals/Cart"
import SideDrawer from "../Modals/SideDrawer"

import "./styles.sass"

export default ({ name, header, children }) => {

    const [ sidedrawer, setSidedrawer ] = useState(false)

    const toggleSidedrawer = () => setSidedrawer(!sidedrawer)
    
    return (
        <Fragment>
            <Header className={name} sidedrawerToggleHandler={toggleSidedrawer} >
                {header}
            </Header>
            <main className={`page ${name}`}>
                {children}
            </main>
            <aside>
                {/* <Cart /> */}
                <SideDrawer isOpen={sidedrawer} toggleHandler={toggleSidedrawer} />
            </aside>
            <Footer />
        </Fragment>
    )
}
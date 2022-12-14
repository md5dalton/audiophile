import React, { Fragment, useEffect } from "react"
import Backdrop from "../Backdrop"

import "./styles.sass"

export default ({ isOpen, children, toggleHandler, ...props }) => {
    
    useEffect(() => {
        scrollTo(0,0)
    }, [isOpen])
    
    return isOpen && (
        <Fragment>
            <Backdrop onClick={toggleHandler} />
            <div className="modal" {...props}>
                { children }
            </div>
        </Fragment>
    )
}
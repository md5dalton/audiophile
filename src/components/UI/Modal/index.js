import React, { Fragment } from "react"
import Backdrop from "../Backdrop"

import "./styles.sass"

export default ({ isOpen, children, toggleHandler, ...props }) => isOpen && (
    <Fragment>
        <Backdrop onClick={toggleHandler} />
        <div className="modal" {...props}>
            { children }
        </div>
    </Fragment>
)
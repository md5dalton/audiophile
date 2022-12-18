import React from "react"
import { Link, useNavigate } from "react-router-dom"

import "./styles.sass"

export default () => {

    const navigate = useNavigate()

    const clickHandler = ev => {
        ev.preventDefault()
        navigate(-1)
    }

    return (
        <Link to="/" className="button text return-button" onClick={clickHandler}>go back</Link>
    )
}
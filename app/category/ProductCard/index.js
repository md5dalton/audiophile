import React from "react"
import ProductCard from "../../../UI/ProductCard"
import { Link } from "react-router-dom"

import "./styles.sass"

export default props => {
    
    const { slug } = props

    return (
        <ProductCard {...props}>
            <Link to={`/p?s=${slug}`} className="button">see product</Link>
        </ProductCard>
    )
}
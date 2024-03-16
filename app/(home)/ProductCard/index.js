import React from "react"
import ProductCard from "../../../UI/ProductCard"
import { Link } from "react-router-dom"

import "./styles.sass"

export default props => {
    
    const { slug } = props

    return (
        <ProductCard {...props}>
            <Link to="/p?s=zx9-speaker" className="button primary CTA">See product</Link>
        </ProductCard>
    )
}
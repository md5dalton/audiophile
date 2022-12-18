import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import ProductCard from "./ProductCard"


export default props => {
    
    const { features, includes } = props

    return (
        <section className="product-detail">
            <div className="product-wapper">
                <Link className="go-back">go back</Link>
                <ProductCard {...props} />
            </div>
            <div className="features">
                <h5>features</h5>
                <p>{features}</p>
            </div>
            <div className="includes">
                <h5>in the box</h5>
                <List 
                    items={includes} 
                    itemHandler={({quantity, item}, index) => (
                        <li key={index}>
                            <span className="quantity-counter">{quantity}x</span> 
                            <p>{item}</p> 
                        </li>
                    )}
                />
            </div>
        </section>
    )
}
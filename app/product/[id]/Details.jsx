import GoBackLink from "@/components/UI/GoBackLink"
import ProductCard from "./ProductCard"
import List from "@/components/UI/List"

import "./Details.sass"

export default props => {
    
    const { features, includes } = props

    return (
        <section className="product-detail">
            <div className="button-wrapper">
                <GoBackLink />
            </div>
            <div className="main">
                <ProductCard {...props} />
            </div>
            <div className="more">
                <div className="features">
                    <h5 className="title">features</h5>
                    <p className="description">{features}</p>
                </div>
                <div className="inbox">
                    <h5 className="title">in the box</h5>
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
            </div>
        </section>
    )
}
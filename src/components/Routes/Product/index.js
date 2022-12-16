import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import About from "../../Layout/About"
import Picture from "../../UI/Picture"
import CategoriesLinks from "../../Layout/CategoriesLinks"
import { getProduct } from "../../../Functions"
import Button from "../../UI/Button"
import CounterInput from "../../UI/CounterInput"

import "./styles.sass"

export default () => {

    const [ searchParams, setSearchParams ] = useSearchParams()

    const product = getProduct(searchParams.get("s"))

    const {
        image, new: isNew, name, description, slug, price, features, includes, gallery, others
    } = product
    
    return (
        <Page name="product">
            <section className="product-detail">
                <div className="product-item">
                    <Link className="go-back">go back</Link>
                    <Picture {...image} />
                    <div className="details">
                        {!isNew && <overline className="new-product">new product</overline>}
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <h6 className="price">$ {Intl.NumberFormat("en-US").format(price)}</h6>
                        <form>
                            <CounterInput />
                            <Button className="primary-button">add to cart</Button>
                        </form>
                    </div>
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
            <section className="gallery">
                <List 
                    items={Object.values(gallery)} 
                    itemHandler={(images, index) => <li key={index}><Picture {...images} /></li> }
                />
            </section>
            <section className="related">
                <h5>you may also like</h5>
                <List 
                    items={others} 
                    itemHandler={({ image, slug, name }, index) => (
                        <li key={index}>
                            <Picture {...image} />
                            <h5>{name}</h5>
                            <Link to={`/p?s=${slug}`} className="link-button">see product</Link>
                        </li>
                    )}
                />
            </section>
            <CategoriesLinks />
            <About />
        </Page>
    )
}
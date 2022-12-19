import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Picture from "../../UI/Picture"

export default ({ others }) => (
    <section className="related">
        <h5 className="title">you may also like</h5>
        <List 
            items={others} 
            itemHandler={({ image, slug, name }, index) => (
                <li key={index}>
                    <Picture {...image} />
                    <div className="details">
                        <h5 className="name">{name}</h5>
                        <Link to={`/p?s=${slug}`} className="button">see product</Link>
                    </div>
                </li>
            )}
        />
    </section>
)
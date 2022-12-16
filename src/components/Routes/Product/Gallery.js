import React from "react"
import List from "../../UI/List"
import Picture from "../../UI/Picture"


export default ({ gallery }) => (
    <section className="gallery">
        <List 
            items={Object.values(gallery)} 
            itemHandler={(images, index) => <li key={index}><Picture {...images} /></li> }
        />
    </section>
)
import React from "react"
import List from "../../UI/List"
import Picture from "../../UI/Picture"


export default ({ gallery }) => (
    <section className="gallery">
        <List 
            items={Object.values(gallery)} 
            itemHandler={(images, index) => <Picture key={index} {...images} /> }
        />
    </section>
)
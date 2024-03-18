import List from "@/components/UI/List"
import Picture from "@/components/UI/Picture"

export default ({ gallery }) => (
    <section className="gallery">
        <List
            items={Object.values(gallery)} 
            itemHandler={(images, index) => <Picture key={index} {...images} /> }
        />
    </section>
)
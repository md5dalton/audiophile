import List from "@/components/UI/List"
import Picture from "@/components/UI/Picture"
import Link from "next/link"

export default ({ others }) => (
    <section className="related">
        <h3 className="title">you may also like</h3>
        <List
            items={others} 
            itemHandler={({ image, slug, name }, index) => (
                <li key={index}>
                    <Picture {...image} />
                    <div className="details">
                        <h5 className="name">{name}</h5>
                        <Link href={`/product/${slug}`} className="button">see product</Link>
                    </div>
                </li>
            )}
        />
    </section>
)
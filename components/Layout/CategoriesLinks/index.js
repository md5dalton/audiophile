import Link from "next/link"
import Icon from "@/components/UI/Icon"
import List from "@/components/UI/List"
import "./styles.sass"

const categories = [
    "headphones", 
    "speakers", 
    "earphones"
]

export default () => {

    const categoryHandler = category => (
        <li key={category} className="category">
            <div className="category-thumbnail">
                <img src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`} alt="" />
            </div>
            <div className="details">
                <h6 className="name">{category}</h6>
                <Link href={`/category/${category}`} className="button terciary">
                    <span>shop</span>
                    <Icon name="arrow-right" />
                </Link>
            </div>
        </li>
    )

    return (
        <section className="categories-links">
            <List className="categories-list" items={categories} itemHandler={categoryHandler} />
        </section>
    )
}
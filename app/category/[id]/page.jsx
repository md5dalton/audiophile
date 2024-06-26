import { getCategoryItems } from "@/Functions"

import List from "@/components/UI/List"
import ProductCard from "./ProductCard"
import About from "@/components/Layout/About"
import Header from "@/components/Layout/Header"
import CategoriesLinks from "@/components/Layout/CategoriesLinks"

import "./styles.sass"

export default ({ params: { id } }) => {

    const items = getCategoryItems(id)
    
    const name = "category"

    return (
        <>
            <Header className={name}>
                <section>
                    <h4 className="category-title">{id}</h4>
                </section>
            </Header>
            <main className={`page ${name}`}>
                <section className="products">
                    <List
                        items={items}
                        itemHandler={(item, index) => <ProductCard {...item} key={index} />}
                        className="products-list"
                    />
                </section>
                <CategoriesLinks />
                <About />
            </main>
        </>
    )
}
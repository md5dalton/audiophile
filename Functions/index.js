import data from "../data.json"

export const getResponsiveImages = (prepend, image) => ({
    mobile: `${prepend}/mobile/${image}`,
    tablet: `${prepend}/tablet/${image}`,
    desktop: `${prepend}/desktop/${image}`
})

export const getCategoryItems = category => data.filter(item => item.category === category)
export const getProduct = slug => data.find(item => item.slug === slug)
export const formatPrice = value => `$ ${Intl.NumberFormat("en-US").format(Math.ceil(value))}`

export const getProducts = cart => cart.map(({ slug, quantity }) => ({ ...getProduct(slug), quantity: quantity }))
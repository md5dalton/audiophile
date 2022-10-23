import data from "../assets/data.json"

export const getResponsiveImages = (prepend, image) => ({
    mobile: `${prepend}/mobile/${image}`,
    tablet: `${prepend}/tablet/${image}`,
    desktop: `${prepend}/desktop/${image}`
})

export const getCategoryItems = category => data.filter(item => item.category === category)
export const getProduct = slug => data.find(item => item.slug === slug)

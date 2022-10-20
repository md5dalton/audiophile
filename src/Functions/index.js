export const getResponsiveImages = (prepend, image) => ({
    mobile: `${prepend}/mobile/${image}`,
    tablet: `${prepend}/tablet/${image}`,
    desktop: `${prepend}/desktop/${image}`
})
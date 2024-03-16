import React from 'react'

const Img = ({ src, ...props }) => <img src={`/assets/${src}`} {...props} />

Img.defaultProps = {
    alt: ""
}

export default Img
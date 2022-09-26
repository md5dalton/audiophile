import React from 'react'

export default ({ mobile, tablet, desktop, ...props }) => (
    <picture {...props}>
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <source srcSet={tablet} media="(min-width: 576px)" />
        <img src={mobile} alt="" />
    </picture>
)
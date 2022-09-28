import React from 'react'

export default ({ children, ...props }) => (
    <section {...props}> 
        <div className="container">{children}</div>
    </section>
)
import React from 'react'

import "./styles.sass"

export default ({ children, ...props }) => <div {...props}> {children} </div>
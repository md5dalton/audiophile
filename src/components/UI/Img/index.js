import React from 'react'

export default ({ name, ...props }) => <img src={`/assets/${name}`} alt={name} {...props} />
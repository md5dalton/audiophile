import React from 'react'
import Button from '../Button'

import "./styles.sass"

export default () => (
    <div className="counter-input">
        <Button>-</Button>
        <input type="text" defaultValue={1} />
        <Button>+</Button>
    </div>
)
import React, { useState } from 'react'
import Button from '../Button'

import "./styles.sass"

export default ({ value, valueHandler }) => {
    
    // const [ value, setValue ] = useState(1)

    const changeHandler = step => valueHandler(step + value > 0 ? step + value : 0)
    
    return (
        <div className="counter-input">
            <Button onClick={() => changeHandler(-1)}>-</Button>
            <input type="number" value={value} onChange={({ target }) => valueHandler(Number(target.value))} />
            <Button onClick={() => changeHandler(1)}>+</Button>
        </div>
    )
}
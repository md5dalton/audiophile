import React from "react"
import Icon from "../../../../../UI/Icon"

export default id => {

    const infoItems = {
        "e-Money":
            <div className="cash-on-delivery-info-row">
                <Icon name="cash-on-delivery" />
                <p className="description">
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                    courier arrives at your residence. Just make sure your address is correct
                    so that your order will not be cancelled.
                </p>
            </div>,
        "Cash on Delivery":
            <ul role="list" className="fields">
                <li className="field">
                    <div className="title small-text">
                        <label>email</label>
                        <span className="error-msg">wrong format</span>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="mail@mail.com" />
                    </div>
                </li>
                <li className="field">
                    <div className="title small-text">
                        <label>email</label>
                        <span className="error-msg">wrong format</span>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="mail@mail.com" />
                    </div>
                </li>
            </ul>
        }

    return infoItems[id]
    
}
import React from "react"
import Icon from "../../../../../UI/Icon"
import FieldText from "../../FieldText"

export default id => {

    const infoItems = {
        "Cash on Delivery":
            <div className="cash-on-delivery-info-row">
                <Icon name="cash-on-delivery" />
                <p className="description">
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                    courier arrives at your residence. Just make sure your address is correct
                    so that your order will not be cancelled.
                </p>
            </div>,
        "e-Money":
            <ul role="list" className="fields">
                <FieldText label="e-Money Number" placeholder="59000000" name="e-money-number" />
                <FieldText label="e-Money PIN" placeholder="1234" name="e-money-pin" type="password" />
            </ul>
        }

    return infoItems[id]
    
}
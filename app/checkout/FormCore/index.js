import React from "react"
import Fieldset from "./Fieldset"
import FieldText from "./FieldText"
import PaymentDetails from "./PaymentDetails"

import "./styles.sass"

export default () => {

    return (
        <div className="form-main">
            <h3 className="form-title">checkout</h3>
            <ul role="list" className="form-inputs fieldsets">
                <Fieldset legend="billing details">
                    <ul role="list" className="fields">
                        <FieldText label="Name" placeholder="Name" name="name" />
                        <FieldText label="Email" placeholder="mail@mail.com" name="email" type="email" />
                        <FieldText label="Phone Number" placeholder="+266 63000000" name="phone" />
                    </ul>
                </Fieldset>
                <Fieldset legend="shipping info">
                    <ul role="list" className="fields">
                        <FieldText label="Address" placeholder="Address" name="address" className="wide" />
                        <FieldText label="ZIP Code" placeholder="0000" name="zip" />
                        <FieldText label="City" placeholder="City" name="city" />
                        <FieldText label="Country" placeholder="Country" name="country" />
                    </ul>
                </Fieldset>
                <PaymentDetails />
            </ul>
        </div>
    )
}
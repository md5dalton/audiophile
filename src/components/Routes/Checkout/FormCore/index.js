import React from "react"
import Fieldset from "./Fieldset"
import FieldText from "./FieldText"
import PaymentDetails from "./PaymentDetails"

import "./styles.sass"

export default () => {

    return (
        <div className="form-main">
            <h4 className="form-title">checkout</h4>
            <ul role="list" className="form-inputs fieldsets">
                <Fieldset legend="billing details">
                    <ul role="list" className="fields">
                        <FieldText label="name" placeholder="Majara" name="name" />
                        <FieldText label="email" placeholder="mail@mail.com" name="email" type="email" />
                        <FieldText label="phone number" placeholder="+266 63000000" name="phone" />
                    </ul>
                </Fieldset>
                <Fieldset legend="shipping info">
                    <ul role="list" className="fields">
                        <FieldText label="address" placeholder="Ha Mpiti, Qacha's Nek" name="address" className="wide" />
                        <FieldText label="ZIP code" placeholder="1997" name="zip" />
                        <FieldText label="city" placeholder="Qacha's Nek" name="city" />
                        <FieldText label="country" placeholder="Lesotho" name="country" />
                    </ul>
                </Fieldset>
                <PaymentDetails />
            </ul>
        </div>
    )
}
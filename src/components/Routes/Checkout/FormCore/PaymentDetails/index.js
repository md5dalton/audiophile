import React, { useState } from "react"
import List from "../../../../UI/List"
import Field from "../Field"
import Fieldset from "../Fieldset"
import InputWrapper from "../InputWrapper"
import Radio from "./Radio"
import useInfo from "./useInfo"

export default () => {

    const [ payment, setPayment ] = useState("e-Money")

    return (
        <Fieldset legend="payment details">
            <ul role="list" className="fields">
                <Field className="wide radios">
                    <div className="title small-text">
                        <span>payment method</span>
                    </div>
                    <List
                        className="input-options"
                        items={["e-Money", "Cash on Delivery"]}
                        itemHandler={(item, index) => (
                            <InputWrapper key={index}>
                                <Radio name={item} group="payment-option" checked={payment === item} changeHandler={setPayment} />
                            </InputWrapper>
                        )}
                    />
                </Field>
            </ul>
            <div className="info">
                { useInfo(payment) }
            </div>
        </Fieldset>
    )
}
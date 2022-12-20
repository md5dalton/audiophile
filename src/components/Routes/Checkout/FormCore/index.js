import React from "react"
import Icon from "../../../UI/Icon"
import List from "../../../UI/List"

import "./styles.sass"

export default () => {

    return (
        <div className="form-main">
            <h4 className="form-title">checkout</h4>
            <ul role="list" className="form-inputs fieldsets">
                <fieldset>
                    <legend className="title subtitle">billing details</legend>
                    <ul role="list" className="fields">
                        <li className="field error">
                            <div className="title small-text">
                                <label>name</label>
                                <span className="error-msg">wrong format</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Majara" />
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
                        <li className="field">
                            <div className="title small-text">
                                <label>phone number</label>
                                <span className="error-msg">wrong format</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="+266 63000000" />
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend className="title subtitle">shipping info</legend>
                    <ul role="list" className="fields">
                        <li className="field wide">
                            <div className="title small-text">
                                <label>address</label>
                                <span className="error-msg">wrong format</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Ha Mpiti, Qacha's Nek" />
                            </div>
                        </li>
                        <li className="field">
                            <div className="title small-text">
                                <label>ZIP code</label>
                                <span className="error-msg">wrong format</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="1997" />
                            </div>
                        </li>
                        <li className="field">
                            <div className="title small-text">
                                <label>city</label>
                                <span className="error-msg">wrong format</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Qacha's Nek" />
                            </div>
                        </li>
                        <li className="field">
                            <div className="title small-text">
                                <label>country</label>
                                <span className="error-msg">wrong format</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Lesotho" />
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend className="title subtitle">payment details</legend>
                    <ul role="list" className="fields">
                        <li className="field wide radios">
                            <div className="title small-text">
                                <span>payment method</span>
                            </div>
                            <ul role="list" className="input-options">
                                <li className="input-wrapper">
                                    <label htmlFor="e-money">
                                        <input type="radio" id="e-money" name="payment-methods" />
                                        <span>e-Money</span>
                                    </label>
                                </li>
                                <li className="input-wrapper">
                                    <label htmlFor="cash-on-delivery">
                                        <input type="radio" id="cash-on-delivery" name="payment-methods" checked />
                                        <span>Cash on Delivery</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="info">
                        <div className="cash-on-delivery-info-row">
                            <Icon name="cash-on-delivery" />
                            <p className="description">
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                                courier arrives at your residence. Just make sure your address is correct
                                so that your order will not be cancelled.
                            </p>
                        </div>
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
                    </div>
                </fieldset>
            </ul>
        </div>
    )
}
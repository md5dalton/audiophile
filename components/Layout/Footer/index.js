import React from 'react'
import Icon from '../../UI/Icon'
import List from '../../UI/List'
import Nav from '../../UI/Nav'

import './styles.sass'

export default () => (
    <footer>
        <div className="container">
            <div className="accent-bar"></div>
            <Nav />
            <p className="description about">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="description copyright">Copyright 2022. All Rights Reserved</p>
            <List
                className="socials"
                items={["facebook", "twitter", "instagram"]}
                itemHandler={(item, index) => <Icon key={index} name={item} />}
            />
        </div>
    </footer>
)
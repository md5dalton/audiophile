import List from "@/components/UI/List"
import Icon from "@/components/UI/Icon"
import Nav from "@/components/UI/Nav"

import "./styles.sass"

export default () => (
    <footer className="pb-10">
        <div className="container grid justify-items-center gap-12">
            <div className="accent-bar h-1 w-[100px] bg-brown"></div>
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
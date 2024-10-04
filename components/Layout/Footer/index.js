import Nav from "@/components/Nav"
import Socials from "./Socials"

export default () => (
    <footer className="pb-10">
        <div className="container grid gap-12 justify-items-center md:justify-items-start md:!text-start">
            <div className="accent-bar h-1 w-[100px] bg-brown"></div>
            <Nav
                className="grid gap-y-12 w-full md:justify-items-start lg:flex lg:justify-between"
                listProps={{
                    className: "flex gap-4 flex-col md:flex-row"
                }}
            />
            <div className="lg:grid lg:grid-cols-2">
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                    visit our demo facility - we’re open 7 days a week.
                </p>
                <div />
            </div>
            <div className="grid gap-y-12 justify-items-center w-full md:flex md:justify-between">
                <p className="font-bold">Copyright 2022. All Rights Reserved</p>
                <Socials />
            </div>
        </div>
    </footer>
)
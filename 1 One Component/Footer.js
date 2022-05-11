import React from "react"
import ReactDOM from "react-dom"
import Facebook from "./Facebook.png"
import Twitter from "./Twitter.png"
import Instagram from "./Instagram.png"
import GitHub from "./GitHub.png"

export default function Footer() {
    return(
        <div className="descFooter">
            <img src={Facebook}/>
            <img src={Twitter}/>
            <img src={Instagram}/>
            <img src={GitHub}/>
        </div> 
    )
}
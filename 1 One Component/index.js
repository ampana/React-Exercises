import React from "react"
import ReactDOM from "react-dom"
import Picture from "./Picture"
import Naming from "./Naming"
import Button from "./Buttons"
import Text from "./Text"
import Footer from "./Footer"
import './style.css'

function AllInOne(){
    return(
        <div>
            <Picture />
            <Naming />
            <Button />
            <Text />
            <Footer />
        </div>
    )
}

ReactDOM.render(<AllInOne />, document.getElementById("root"))
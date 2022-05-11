import React from "react"
import ReactDOM from "react-dom"
import Me from "./cat.avif" 
export default function Picture() { 
    return(
        <img src={Me} alt="me" className="top-img" />
    )
}
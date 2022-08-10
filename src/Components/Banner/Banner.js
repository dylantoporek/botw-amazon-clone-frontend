import React from "react";
import banner from '../../images/background1.jpeg'
import '../Banner/index.scss'

function Banner(){
    return (
        <div id='banner-container'>
            <img id='banner' src={banner}/>
        </div>
    )
}

export default Banner
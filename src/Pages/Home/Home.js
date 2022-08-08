import React from "react";
import '../Home/index.scss'
import banner from '../../images/background1.jpeg'

function Home(){
    return (
        <div className='home-container'>
            <div id='banner-container'>
                <img id='banner' src={banner}/>
            </div>
        </div>
    )
}

export default Home
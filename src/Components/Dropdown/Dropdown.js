import React, {useState, useEffect} from "react";
import '../Dropdown/index.scss'
import 'animate.css'

function Dropdown({navigation, navbarIsSelected}){

    let dropDownTarget = navigation.categories.filter((category)=>{
        if (category.id === navbarIsSelected){
            return category
        } else {
            return null
        }
    })

    if (dropDownTarget){

    
    return (
        <div id='drop-down-container'>
            {dropDownTarget ?
            <div className="drop-down-row">
               {dropDownTarget[0].sections.map((section) =>{ 
               return( 
                <div className='drop-down-column' key={section.name}>
                    <span>{section.name}</span>
                    {section.items.map((item)=>{
                        return <span key={item.name}>{item.name}</span>
                    })}
                </div>
               )
               })}

               {dropDownTarget[0].featured.map((feature) =>{
                return (
                    <div key={feature.name}>
                        <span>{feature.name}</span>
                        <img src={feature.imageSrc}/>
                    </div>
                )
               })}
            </div> 
             :
            <div></div>}
        </div>
    )
    } else {
        return (
            <div id='drop-down-container'></div>
        )
    }

}

export default Dropdown
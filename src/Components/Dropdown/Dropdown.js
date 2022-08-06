import React, {useState} from "react";
import '../Dropdown/index.scss'

function Dropdown({navigation, navbarIsSelected}){
    
let dropDownTarget = navigation.categories.filter((category)=>{
        if (category.id === navbarIsSelected){
            return category
        } else {
            return null
        }
    })

    return (
        <div className="drop-down-container">
            {dropDownTarget ?
            <div className="drop-down-row">
               {dropDownTarget[0].sections.map((section) =>{ 
               return( 
                <div className='drop-down-column'>
                    <span>{section.name}</span>
                    {section.items.map((item)=>{
                        return <span>{item.name}</span>
                    })}
                </div>
               )
               })}

               {dropDownTarget[0].featured.map((feature) =>{
                return (
                    <div>
                        <span>{feature.name}</span>
                        <img src={feature.imageSrc}/>
                    </div>
                )
               })}
            </div> 
             :
            null}
        </div>
    )
}

export default Dropdown
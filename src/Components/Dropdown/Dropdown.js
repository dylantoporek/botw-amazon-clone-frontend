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

    useEffect(()=>{
        let target = document.getElementById('drop-down-container')
        console.log(target)
    }, [])

    if (dropDownTarget){
    return (
        <div id='drop-down-container' className='animate__animated animate__slideInDown'>
            {dropDownTarget ?
            <div className="drop-down-row">
               {dropDownTarget[0].sections.map((section) =>{ 
               return( 
                <div className='drop-down-column' key={section.name}>
                    <span id={section.name} className='section'>{section.name}</span>
                    {section.items.map((item)=>{
                        return <span id={item.name} key={item.name} className='item'>{item.name}</span>
                    })}
                </div>
               )
               })}

               {dropDownTarget[0].featured.map((feature) =>{
                return (
                    <div className='feature' key={feature.name}>
                        <span className='section'>{feature.name}</span>
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
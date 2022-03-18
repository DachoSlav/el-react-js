import React, { useEffect, useState } from 'react';
import './ad.css'
import NoImg from '../assets/violet.svg'
import YesImg from '../assets/green.svg'
export default function(){
    
    
    const [buttonClicked, setButtonClicked] = useState(true);

    const saveLocal = () =>{
        localStorage.setItem("clicked", true)
        setButtonClicked(true);
    }
    useEffect(() =>{
        setTimeout(function(){
            setButtonClicked(false);
        }, 10000) 
    }, [])

    return(
        localStorage.getItem("clicked") == "false" && !buttonClicked ? 
        
        
        <div className='div-to-be-edited'>
            <div className='div-ad-wrapper-whole'>
            <div className='do-you-need-title'>Do you need micro business loans?</div>
            <div className='do-you-need-subtitle'>Quick loans for businesses, invoice financing and flexible loans</div>
            <div className='div-ad-wrapper'>
                <div className='ad-left-no'>
                    <img src={NoImg} className="no-image"></img>
                    <button className='not-really' onClick={saveLocal}>NOT REALLY</button>
                </div>
                <div className='ad-right-yes'>
                    <img src={YesImg} className="no-image"></img>
                    <button className='extra-money' onClick={saveLocal}>YES! EXTRA MONEY</button>
                </div>
                
                </div>
            </div>
        </div>
        
        : null
    );
}
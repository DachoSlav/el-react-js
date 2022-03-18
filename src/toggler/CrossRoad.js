import './crossRoad.css'
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

export default function(){
    useEffect(() => {
        //standard behave when the page loads
        
        document.getElementById("to-be-changed-one").classList.add("add-border-bottom");
        document.getElementById("to-be-changed-one").classList.add("add-dark-color-text");
        document.getElementById("to-be-changed-two").classList.add("add-light-color-text");
      });

    const handleNews = (e) => {
        //if we click on In The News
        var title = document.getElementById("el-title");
        var titleToChange =  document.getElementById("change-title");
        var one = document.getElementById("to-be-changed-one");
        var two = document.getElementById("to-be-changed-two");
        
        title.innerHTML = "Enterprise League";
        titleToChange.innerHTML = "In the News";


        //logic implementing if we come either way from beginning or we come from press, handles multiple clicks
        one.classList.add("add-border-bottom");
        one.classList.remove("add-light-color-text");
        one.classList.add("add-dark-color-text");

        two.classList.remove("add-dark-color-text");
        two.classList.add("add-light-color-text");
        two.classList.remove("add-border-bottom");
    }

    const handlePress = (e) => {
        //if we click on Press
        var title = document.getElementById("el-title");
        var titleToChange =  document.getElementById("change-title");
        var one = document.getElementById("to-be-changed-one");
        var two = document.getElementById("to-be-changed-two");


        title.innerHTML = "Enterprise League";
        titleToChange.innerHTML = "Press";

        //logic implementing if we come from In The News covering mltiple clicks on Press
        one.classList.remove("add-border-bottom");
        one.classList.remove("add-dark-color-text");
        one.classList.add("add-light-color-text");

        two.classList.add("add-border-bottom");
        two.classList.remove("add-light-color-text");
        two.classList.add("add-dark-color-text");
        
    }


    return(
        <div className="center-part">
            <div className="title-center">
                <h4 className="el" id='el-title'>Enterprise League</h4>
                <h4 className="in-the-news-title" id="change-title">In the News</h4>
            </div>
            
            <div className="two-buttons">
                <Link to="/" className="in-the-news" id="to-be-changed-one" onClick={handleNews}>In the News</Link>
                <Link to="/press" className="press" id="to-be-changed-two" onClick={handlePress}>Press</Link>
            </div>
        </div>
    );
}
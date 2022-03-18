import React from 'react'
import Data from './data.json';
import './left.css'

export default function(){

    return(
        <div className='card-container'>
            <div className='card-wrapper'>
               {
                   Data && Data.map(post =>{
                    return (
                        <div key={post.id} className="container">
                            <img src={post.image} className="photo"></img>
                            <h5 className='title'>{post.title}</h5>
                            <div className='description'>{post.description}</div>
                        </div>
                    );
                   })
               }
            </div>
            
        </div>
    );
}
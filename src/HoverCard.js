import React from 'react';
import './hovercard.css'
import logo from './images/share.png'
export default class HoverCard extends React.Component{

    render(){
        return(
            <div className="wrapper">
                <div className="card">
                    <img src={logo} alt="card-img" />
                    <div className="info">
                        <h1>Projects</h1>
                        <p>brief description</p>
                        <a href="https://www.facebook.com" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}
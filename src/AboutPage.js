import React from 'react'
import './About.css'
import facebook from './images/social.png'
import tweeter from './images/twitter.png';
import instagram from './images/instagram-sketched.png';
import youtube from './images/yt.png';

export default class About extends React.Component{
    render() {
        return(
            <div className="about-box">
                <br/><br/> <br/>
                <h2>My Professional life as a designer , developer & engineer</h2>
                <div className="box-detail">
                </div>
                <div className="box-flex">
                <h3>Diplomes</h3>

                <ul>
                    <li>Computer Science Engineer Diplome 2018</li>
                    <li>National Preparatory Exams PC 2013</li>
                    <li>BAC 2009</li>
                </ul>
                <br/>
                    <h3>Skills</h3>
                    <ul>
                        <li>I used to make Web and Mobile Applications with different cross framework</li>
                        <li>I make prototypes for applications  with frame api</li>
                        <li>Reanimate old websites with new design</li>
                        <li>Deploying websites  and writing runtime tests</li>
                    </ul>
                    <br/>
                    <h3>Live Coding</h3>
                    <ul>
                        <li>As usual we make online tutoriels on my youtube Channel</li>
                        <li>I make crude Applications with nodejs and mongodb</li>
                        <li>Cool design with css3 and html5</li>
                        <li>Deploying websites  and writing runtime tests</li>
                        <li>And ...coming soon</li>
                    </ul>
                    <div className="image-cover">

                    </div>
                </div>
                <div className="social-menu">
                    <ul>
                        <li>
                            <a  href="https://www.facebook.com/Nouha.MB18" ><img style={{width:'75%', height:'80%',paddingTop:2,paddingLeft:4}} src={facebook} alt="fa facebook"/></a>
                        </li>
                        <li>
                            <a   href="https://www.youtube.com/channel/UCsnFKMn8xNBcKydSAh8XigA/featured?disable_polymer=1"><img style={{width:'80%', height:'80%',paddingTop:2}} src={youtube} alt="Youtube"/></a>
                        </li>
                        <li>
                            <a   href="https://twitter.com/pink8flower"><img style={{width:'80%', height:'80%',paddingTop:2}} src={tweeter} alt="tweeter"/></a>
                       </li>
                        <li>
                            <a  href="https://www.instagram.com/nouha9545/?hl=fr"><img style={{width:'75%', height:'75%',borderRadius:10,paddingTop:5,paddingLeft:2,paddingRight:1}} src={instagram} alt="instagram"/> </a>
                        </li>
                    </ul>
                 </div>

            </div>
        );
    }
}
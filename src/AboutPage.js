import React from 'react'
import './About.css';
import facebook from './images/social.png'
import tweeter from './images/twitter.png';
import instagram from './images/instagram-sketched.png';
import youtube from './images/yt.png';


export default class About extends React.Component{

    render() {
        return(
            <div className="about-box">
                <br/>
               <h1 className="title"><span className="ligne" style={{width:450, height:3, color:'transparent'}}>------------------------------ </span>About Me <span className="ligne" style={{width:450, height:3, color:'transparent'}}>-------------------------------------------------------------- </span></h1>
                <div className="content-box">
                    <section className="img-box">
                        <img src="clock.jpg" alt="nouha" style={{width:'100%', height:'100%',borderRadius:60}}/>
                        </section>
                    <p>
                    Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework and professional development.
                   Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework and professional development.
                    </p>
                </div>

                <div className="social-menu">
                    <ul>
                        <li>
                            <a  href="http://localhost:3000/Home" ><img style={{width:'75%', height:'80%',paddingTop:2,paddingLeft:4}} src={facebook} alt="fa facebook"/></a>
                        </li>

                        <li>
                            <a   href="http://localhost:3000/About"><img style={{width:'80%', height:'80%',paddingTop:2}} src={youtube} alt="Youtube"/></a>
                        </li>
                        <li>
                            <a   href="http://localhost:3000/About"><img style={{width:'80%', height:'80%',paddingTop:2}} src={tweeter} alt="tweeter"/></a>
                        </li>
                        <li>
                            <a  href="http://localhost:3000/About"><img style={{width:'75%', height:'75%',borderRadius:10,paddingTop:5,paddingLeft:2,paddingRight:1}} src={instagram} alt="instagram"/> </a>
                        </li>
                    </ul>
                 </div>
                <div className="contactme-box">
                   <br/><br/>
                    <section className="form">
                        <h2>Contact Me</h2>
                        <input className="name" type="text" placeholder="name" require/>
                        <br/>
                       <input className="email" type="text" placeholder="@email" require/>
                        <br/>
                       <input className="submit" type="submit" value="Send to me" />
                        <br/>
                        <span>tel : 216 258147</span><br/>
                        <span>my email: pinkboot@gmail.com</span>
                    </section>
                </div>
            </div>
        );
    }
}
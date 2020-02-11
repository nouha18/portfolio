import React from 'react';
import './App.css';
import logo from "./images/nouha-logo.png";
import { FacebookProvider, ShareButton,LoginButton } from 'react-facebook';
import facebook from "./images/facebook-blanc.png";
import youtube from "./images/youtuber-32.png";
import tweeter from "./images/twitter-blanc-32.png";
import linkedin from "./images/linkedin-32.png";
import Services from "./Services";


function App() {
  return (
    <div className="App">
     <div className="App-heading">
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         <div className="header-box">
             <h1>Portfolio for me</h1>
             <ul>
                 <li>
                     <a  href="http://www.facebook.com" ><img style={{width:'75%', height:'80%',paddingTop:2,paddingLeft:4}} src={facebook} alt="fa facebook"/></a>
                 </li>

                 <li>
                     <a   href="http://www.youtube.com"><img style={{width:'80%', height:'80%',paddingTop:2}} src={youtube} alt="Youtube"/></a>
                 </li>
                 <li>
                     <a   href="http://www.twitter.com"><img style={{width:'80%', height:'80%',paddingTop:2}} src={tweeter} alt="twitter"/></a>
                 </li>
                 <li>
                     <a  href="http://www.instagram.com"><img style={{width:'75%', height:'75%',borderRadius:10,paddingTop:5,paddingLeft:2,paddingRight:1}} src={linkedin} alt="linkedin"/> </a>
                 </li>
             </ul>

         </div>
         <div className="info-box">
             <img  src={logo} alt="nouha logo" />
             <br/>
             <span>feel free to look around and join the team</span>
             <br/>
             <FacebookProvider appId="123456789">
                 <ShareButton style={{color:"#1B019B"}} href="http://www.facebook.com">
                     Share
                 </ShareButton>
             </FacebookProvider>
             &nbsp;&nbsp;
             <FacebookProvider appId="123456789">
                 <LoginButton
                     scope="email">
                     <span>Login via Facebook</span>
                 </LoginButton>
             </FacebookProvider>
             <br/>
             <br/>    <br/>    <br/>    <br/>    <br/>
             <span>__________________________________________</span>
             <br/>
             <a  href="http://localhost:3000/Home" >Follow</a>

             <h5>23 Visitors</h5>
             <br/>
             <h6>25/01/2020</h6>
         </div>
     </div>
     <div className="App-services">
     <h1>My Services</h1>
    <Services/>
     </div>

    </div>
  );
}

export default App;

import React from 'react';
import  './App.css';
import About from "./AboutPage";
import Home from "./Home";
import Blocs from "./HomePage";
import facebook from "./images/social.png";
import youtube from "./images/yt.png";
import tweeter from "./images/twitter.png";
import instagram from "./images/instagram-sketched.png";

class Project  extends React.Component{
    render() {
        return (
            <div className="container-box">
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="section1">
                 <br/><br/><br/><br/>
                 <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My Projects Page</h2>
                </div>
                <div className="section2">
                    <br/><br/><br/>
                    <Blocs/>
                </div>

            </div>
        );
    }
}

class StartPage extends React.Component{

    render(){
        return(
          <div className="wrapper">
              <div className="back-image">
                  <h2>Hello! this is Nouha</h2>
                  <p>I'm a computing Science Engineer</p>

                  <div className="btn-wrap">
                      <span>Know Me</span>
                      <div className="container-menu">

                          <a href="https://www.facebook.com/Nouha.MB18">
                          <i className="facebook" >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/></svg>
                          </i>   </a>
                          <a href="https://www.facebook.com/Nouha.MB18">

                          <i className="linkedin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/></svg>
                          </i></a>
                          <a href="https://www.facebook.com/Nouha.MB18">

                              <i className="twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/></svg> </i></a>
                              <a href="http://www.google.com">

                                  <i className="intagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"/><path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"/></svg> </i></a>
                      </div>
                  </div>
              </div>

                </div>


        );
    }
}
function App() {
    return (
        <div className="main-box">
            <div className="languages">
             <h2>Languages</h2>
                <ul>
                    <li> Arabic</li>
                    <li> Frensh</li>
                    <li> English</li>
                   <li> China </li>
                </ul>
            </div>
            <nav>
                <a href="#first" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z"/><path d="M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z"/></svg></a>
                <a href="#second"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"/></svg></a>
                <a href="#third"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M449.2 208H423v-32l-14.4-48H383V96l-15-48H144l-15 48v32h-25.6L89 176v32H62.8L48 256v165.3c0 23.5 35.2 42.7 58.7 42.7h314.7c21.8 0 42.7-19.7 42.7-41V256l-14.9-48zM176 96h160v32H176V96zm-41 80h242v32H135v-32zm282 112h-82.6c-7.4 36.5-39.7 64-78.4 64s-71-27.5-78.4-64H95v-32h322v32z"/></svg></a>
                <a href="#third"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"/></svg></a>
            </nav>
            <StartPage/>
            <div className="container-app">
               <section id="first">
                   <About/>
                 </section>
                <section id="second">
                    <br/> <br/>
                    <About/>
                </section>
                <section id="third">
               <Project/>
                </section>
            </div>

        </div>
    );
}

export default App;

import React from 'react'
import './Projectstyle.css';
import FlipCard from "./FlipePages";
import Cards from "./Cards";
import HoverCard from "./HoverCard";

export default class Project extends React.Component {

    render(){
        return(
            <div className="container-box">

                      <div className="section1">
                          <br/><br/><br/><br/>
                        <p>My Projects Page</p>

                   </div>
                <div className="section2">
                   <FlipCard/>


                  </div>

            </div>
        );
    }
}
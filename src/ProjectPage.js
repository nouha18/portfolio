import React from 'react'
import './Projectstyle.css';
import App from './ReactProject'
import TCards from "./Transitcard";
export default class Project extends React.Component {

    render(){
        return(
            <div className="container">
                 <div className="section1">
                     <h1>Project Page</h1>
                     <span>image t add</span>
                 </div>
                <div className="section2">
                 <App/>
                 <TCards/>
                </div>

            </div>
        );
    }
}
import React from 'react';
import {Link} from "react-router-dom";
import './Menustyle.css'
export default class Menu extends React.Component{

    render(){
        return(
            <div className="header">
                <section className="navigation-icon">
                    <span className="topbar"> </span>
                    <span className="middlebar"> </span>
                    <span className="bottombar"> </span>
                </section>
                <nav className="navigation">
                    <section className="navigation-menu">
                   <br/><br/><br/><br/>
                    <ul>
                        <li>
                            <Link  style={{color:'#f29'}}  to="/About">About</Link>
                        </li>
                        <br/>
                        <li>
                            <Link style={{color:'#f29'}} to="/Project">Project</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <br/>
                        <li>
                            <Link style={{color:'#f29'}} to="/">Home</Link>
                        </li>
                        <br/>
                        <li>
                            <Link style={{color:'#f29'}} to="/">Tutos</Link>
                        </li>
                    </ul>
                </section>
                </nav>

            </div>
        );
    }
}
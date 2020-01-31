import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App';
import About from './AboutPage';
import Project from './ProjectPage';
import Menu from "./MenuSlider";
export default class Routes extends React.Component{

    render() {
        return(
            <Router>
                <div className="router-box">
                    <nav>
                       <Menu/>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Project">
                            <Project/>
                        </Route>
                        <Route path="/">
                            <App/>
                        </Route>

                    </Switch>
                </div>
            </Router>
        );
    }

}
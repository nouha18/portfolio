import React from 'react';
import './flippystyle.css'


export default class FlipCard extends React.Component{

    render(){
        return(
            <div className="container1">
             <div className="card">
                 <div className="face face1">
                     <div className="content">
                    <h3>Project Card</h3>
                     <i>image</i>
                     </div>
                 </div>
                <div className="face face2">
                   <div className="content">
                            <h3>description</h3>
                             <a href="http://localhost:3000/">Read More</a>
                        </div>
                </div>
             </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>Project Card</h3>
                            <i>image</i>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>description</h3>
                            <a href="http://localhost:3000/">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>Project Card</h3>
                            <i>image</i>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>description</h3>
                            <a href="http://localhost:3000/">Read More</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


}
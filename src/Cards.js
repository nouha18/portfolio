import React from 'react';
import './Cards.css'
export default class Cards extends React.Component{

    render() {
        return(
            <div className="blog-post">
                <div className="blog-post__img">
                <img src="clock.jpg" alt="cards responsive" />
                </div>
                <div className="blog-post__info">
                    <div className="blog-post__date">
                        <span>Sunday </span>
                        <span>20/01/2020 </span>
                    </div>
                    <h1 className="blog-post__title">Cards Account </h1>
                    <p className="blog-post__text">
                        paragraphe
                    </p>
                    <a href="#" className="blog-post__cta">Learn More</a>
                  </div>
            </div>
        );

    }

}
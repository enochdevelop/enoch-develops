import React from 'react';
import './App.css';
import './BoxBois.css';
import './bottleflip.css';
import './Artrip.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ARTripPage() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
    };
    return(
        <div className="app-sub">
            <HomeButtonLink />
            <div className="header_container">
                <div className="pages_header">
                    <h3 className="header">AR Trip</h3>
                        <Carousel 
                        responsive={responsive} 
                        ssr={true}
                        containerClass="slides"
                        itemClass="carousel-item-padding-40-px">
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> When you're looking to travel </p>
                                    <p> but don't feel like leaving the house</p>
                                </div>
                                <div className="ArTrip_1">
                                </div>
                            </div>
                            <div className="participants" >
                                    <p> Try it out by  </p>
                                    <p>  clicking the link! </p>
                                    <a className = "click_color" href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=59300bc2aadf4707be9b45aabc5d96f6&metadata=01">Click Here</a>
                            </div>
                        </Carousel>
                </div>
            </div>
        </div>
    );
}


export default ARTripPage;
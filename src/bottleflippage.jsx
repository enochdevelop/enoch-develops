import React from 'react';
import './App.css';
import './BoxBois.css';
import './bottleflip.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function BottleFlipPage() {
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
                    <h3 className="header">Bottle Flip</h3>
                        <Carousel 
                        responsive={responsive} 
                        ssr={true}
                        containerClass="slides"
                        itemClass="carousel-item-padding-40-px">
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> Bored? </p>
                                    <p> need something to pass the time?</p>
                                    <p> well don't I have something for you </p>
                                </div>
                                <div className="bottle_1">
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p>introducing my "bottle flip" lens</p>
                                    <p>all you have to do is tap the screen</p>
                                    <p>and try to land the bottle </p>
                                    <p>have fun! </p>
                                </div>
                                <div className="bottle_2">
                                </div>
                            </div>
                            <div className="participants" >
                                    <p> Try it out by  </p>
                                    <p>  clicking the link! </p>
                                    <a className = "click_color" href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=afe7f4d2c07c4d57950089972a072e16&metadata=01">Click Here</a>
                            </div>
                        </Carousel>
                </div>
            </div>
        </div>
    );
}


export default BottleFlipPage;
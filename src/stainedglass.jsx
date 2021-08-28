import React from 'react';
import './App.css';
import './BoxBois.css';
import './stainedglass.css'

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function StainedGlass() {
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
                    <h3 className="header">Image Scan</h3>
                        <Carousel 
                        responsive={responsive} 
                        ssr={true}
                        focusOnSelect={true}
                        partialVisible={false}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        containerClass="slides"
                        itemClass="carousel-item-padding-40-px">
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> Ever envisioned what it  </p>
                                    <p> would be like to place any</p>
                                    <p> image of your choosing  </p>
                                    <p> in a glass?</p>
                                </div>
                                <div className="glass_introduction_image">
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p>All you have to do is take a image</p>
                                    <p>of your choosing, </p>
                                    <p>and position your camera </p>
                                    <p>towards the image</p>
                                </div>
                                <div className="glass_image2">
                                </div>
                            </div>
                            <div className="participants">
                                <p className="title_header"> Developer</p>
                                <p>Enoch Ajagbe</p>
                                <p className="title_header"> Art & Animation</p>
                                <p> Alex Bradt</p>
                            </div>
                            <div className="participants" >
                                    <p> Try the game out by  </p>
                                    <p>  clicking the link! </p>
                                    <a className = "click_color" href="https://lensesforsnap.com/box-bois-snapchat-lens-filter/">Click Here</a>
                            </div>
                        </Carousel>
                </div>
            </div>
        </div>
    );
}

export default StainedGlass;
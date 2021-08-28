import React from 'react';
import './App.css';
import './BoxBois.css';
import './cocomo.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function HotCoCoMoPage() {
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
                    <h3 className="header">Hot CoCo Mo</h3>
                        <Carousel 
                        responsive={responsive} 
                        ssr={true}
                        containerClass="slides"
                        itemClass="carousel-item-padding-40-px">
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> Can you watch my </p>
                                    <p> "hot coco mo" for me?</p>
                                    <p> please try not to spill it </p>
                                    <p> thank you!</p>
                                </div>
                                <div className="coco_1">
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p>just make sure ur camera keeps </p>
                                    <p>my hot coco in its frame </p>
                                    <p>and nothing bad will happen </p>
                                </div>
                                <div className="coco_2">
                                </div>
                            </div>
                            <div className="participants" >
                                    <p> Try it out by  </p>
                                    <p>  clicking the link! </p>
                                    <a className = "click_color" href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=16743107bc33400380dc02e36066e9fa&metadata=01">Click Here</a>
                            </div>
                        </Carousel>
                </div>
            </div>
        </div>
    );
}


export default HotCoCoMoPage;
import React from 'react';
import './App.css';
import './BoxBois.css';
import './bottleflip.css';
import './arui.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ARUiPage() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="app-sub">
            <HomeButtonLink />
            <div className="header_container">
                <div className="pages_header">
                    <h3 className="header">AR UI</h3>

                </div>
            </div>
            <Carousel
                responsive={responsive}
                ssr={true}
                // containerClass="slides"
                itemClass="carousel-item-padding-40-px">
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> Mom, Dad, look I can </p>
                        <p> finally play with holograms Ui</p>
                        <p> projected through a phone! </p>
                    </div>
                    <div className="ArUi_1">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> Added Functionality: </p>
                        <p> Scaling: </p>
                    </div>
                    <div className="ArUi_2">
                    </div>
                </div>

            </Carousel>
        </div>
    );
}


export default ARUiPage;
import React from 'react';
import './App.css';
import './BoxBois.css';
import './unwrapped.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function UnwrappedPage() {
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
                    <h3 className="header">Box Bois</h3>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                ssr={true}
                // containerClass="slides"
                itemClass="carousel-item-padding-40-px">
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> Meet Bowie in the snow! </p>
                        <p> Bowie is currently on his vacation</p>
                        <p> and he invites you join him </p>
                    </div>
                    <div className="unwrapped_introduction_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> on his trip, Bowie decided to collect</p>
                        <p> some presents along the way.</p>
                        <p> Help Bowie collect as many presents </p>
                        <p> as he can!</p>
                    </div>
                    <div className="unwrapped_page1_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> pay attention to the timer at the </p>
                        <p> bottom and don't let it run out </p>
                        <p> each gift collected gives you more </p>
                        <p> time to collect more presents</p>
                    </div>
                    <div className="unwrapped_page2_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> use the slider to guide bowie  </p>
                        <p> as he flies and glides down through</p>
                        <p> the air </p>
                    </div>
                    <div className="unwrapped_page3_image">
                    </div>
                </div>
                <div className="participants">
                    <p className="title_header"> Developer</p>
                    <p>Enoch Ajagbe</p>
                    <p className="title_header"> Art & Animation</p>
                    <p> Alex Bradt</p>
                    <p> Gabe Armentano</p>
                    <p className="title_header"> Sound Design</p>
                    <p> Noah Huelsman</p>
                </div>
                <div className="participants" >
                    <p> Try the game out by  </p>
                    <p>  clicking the link! </p>
                    <a className="click_color" href="https://lnkd.in/eaR3Uqx">Click Here</a>
                </div>
            </Carousel>

        </div>
    );
}

export default UnwrappedPage;
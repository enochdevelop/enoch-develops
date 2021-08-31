import React from 'react';
import './App.css';
import './BoxBois.css';
import './spooksmash.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SpookSmashPage() {
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
                    <h3 className="header">Spook Smash</h3>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                ssr={true}
                // containerClass="slides"
                itemClass="carousel-item-padding-40-px">

                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> Welcome to the spookiest </p>
                        <p> month of the year!</p>
                        <p> to celebrate,  </p>
                        <p> heres an immersive spooky game </p>
                        <p> "SPOOK SMASH!!" </p>
                    </div>
                    <div className="spook_introduction_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p>To start, make sure your surrounding</p>
                        <p>is well lit for better motion tracking </p>
                    </div>
                    <div className="spook_page1_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p>now imagine holding a sword</p>
                        <p>in your hand, got it? </p>
                        <p>take that image of your hand gesture </p>
                        <p> and place your hand </p>
                        <p>in front of your phone</p>
                    </div>
                    <div className="spook_page2_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p>maintain that hand gesture</p>
                        <p>and move your hand left and right. </p>
                        <p>that will be your gameplay motion </p>
                    </div>
                    <div className="spook_page3_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> to start, make sure hand</p>
                        <p>  is able to hit the bubbles. </p>
                        <p> once ready, hit all 3 bubbles </p>
                        <p> and "its game time" </p>
                    </div>
                    <div className="spook_page4_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> a tomb is going to spawn </p>
                        <p> accompanied with a pumpkin minion </p>
                    </div>
                    <div className="spook_page5_image">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> hit the bubbles before the red  </p>
                        <p> circle gets too small  </p>
                        <p> and defend yourself </p>
                    </div>
                    <div className="spook_page6_image">
                    </div>
                </div>
                <div className="participants">
                    <p className="title_header"> Developer</p>
                    <p>Enoch Ajagbe</p>
                    <p className="title_header"> Hand Tracking Developer</p>
                    <p>Aidan Wolf</p>
                    <p className="title_header"> Art & Animation</p>
                    <p> Alex Bradt</p>
                    <p className="title_header"> Sound Design</p>
                    <p> Noah Huelsman</p>
                </div>
                <div className="participants" >
                    <p> Try the game out by  </p>
                    <p>  clicking the link! </p>
                    <a className="click_color" href="https://lensesforsnap.com/spook-smash-snapchat-lens-filter/">Click Here</a>
                </div>
            </Carousel>
        </div>

    );
}


export default SpookSmashPage;
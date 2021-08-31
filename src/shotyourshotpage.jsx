import React from 'react';
import './App.css';
import './BoxBois.css';
import './shootshot.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ShootYourShotPage() {
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
                    <h3 className="header">Shoot Your Shoot</h3>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                ssr={true}
                // containerClass="slides"
                itemClass="carousel-item-padding-40-px">
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> Ever simply just wanted to </p>
                        <p> "shoot your shoot"</p>
                        <p> but in a more visualized way  </p>
                        <p> rather than just a text message? </p>
                    </div>
                    <div className="shoot_1">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p>well now you can with  </p>
                        <p>this Ar "shooting your shot" lens.</p>
                        <p>all you have to do is tap the screen</p>
                        <p>and a randomized shot will generate</p>
                    </div>
                    <div className="shoot_2">
                    </div>
                </div>
                <div className="content_container" >
                    <div className="paragraph_descriptions">
                        <p> just keep in mind</p>
                        <p> the percentages of you making the shot </p>
                        <p> does not affect your chances  </p>
                        <p> with said, "person"  </p>
                    </div>
                    <div className="shoot_3">
                    </div>
                </div>
                <div className="participants" >
                    <p> Try it out by  </p>
                    <p>  clicking the link! </p>
                    <a className="click_color" href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=481cd49d94334af5953eb3c95973d265&metadata=01">Click Here</a>
                </div>
            </Carousel>
        </div>
    );
}


export default ShootYourShotPage;
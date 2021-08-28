import React from 'react';
import './App.css';
import './BoxBois.css';

import HomeButtonLink from "./HomeButton";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function BoxBoisPage() {
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
                    <h3 className="header">Box Bois</h3>
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
                                    <p> Meet Bowie! </p>
                                    <p>Bowie is the main Box Boi of this story</p>
                                    <p>and his goal is to save </p>
                                    <p>his fellow Box Bois in danger </p>
                                </div>
                                <div className="bowie_introduction_image">
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p>To save them, Bowie's cannon has to be</p>
                                    <p>aimed towards each new Bois direction.</p>
                                    <p>Through tapping on the screen, the </p>
                                    <p>cannon will then be launched</p>
                                </div>
                                <div className="bowie_cannon_image">
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> after the cannon is launched, use the</p>
                                    <p> positioning of your face to control </p>
                                    <p> the Boi attached to the ballon</p>
                                    <p> and align him with the shot to be saved</p>
                                </div>
                                <div className="bowie_no_mesh_image">         
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> as more bois are saved, the </p>
                                    <p> harder the level becomes and new </p>
                                    <p> obstacles are present! </p>
                                    <p> meet your worst cardboard nightmare</p>
                                    <p> "The scissors"</p>
                                    <p> </p>
                                </div>
                                <div className="bowie_avoid_image">         
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> "the scissors" goal is to block </p>
                                    <p> your path and remind you, </p>
                                    <p> "you're just a cardboard"</p>
                                </div>
                                <div className="bowie_block_image">         
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> avoid the scissors by moving your</p>
                                    <p> face to control your fellow Bois.</p>
                                    <p> launch Bowie at the right time </p>
                                    <p> and save the the Bois</p>
                                </div>
                                <div className="bowie_Avoid2_image">         
                                </div>
                            </div>
                            <div className="content_container" >
                                <div className="paragraph_descriptions">
                                    <p> prove to "the scissors" </p>
                                    <p> that you are Bowie! </p>
                                    <p> you can do anything. </p>
                                    <p> you're a Hero, and </p>
                                    <p> nothing will stand in your way</p>
                                </div>
                                <div className="bowie_Dancing_image">         
                                </div>
                            </div>
                            <div className="participants">
                                <p className="title_header"> Developer</p>
                                <p>Enoch Ajagbe</p>
                                <p className="title_header"> Art & Animation</p>
                                <p> Alex Bradt</p>
                                <p className="title_header"> Producer</p>
                                <p> Gabe Armentano</p>
                                <p className="title_header"> Sound Design</p>
                                <p> Noah Huelsman</p>
                                <p className="title_header"> Merch</p>
                                <p> Brad Stailey</p>
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

export default BoxBoisPage;